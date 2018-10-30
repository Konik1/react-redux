const ADD_NEW_CARD = 'ADD_NEW_CARD'
const RENAME_CARD = 'RENAME_CARD'
const DELETE_CARD = 'DELETE_CARD'
const CHANGE_CARD_DESCRIPTION = 'CHANGE_CARD_DESCRIPTION'

const DELETE_CARDS_IN_COLUMN = 'DELETE_CARDS_IN_COLUMN' 

const DELETE_COMMENTS_IN_CARD = 'DELETE_COMMENTS_IN_CARD'

export const addNewCard = (titleCard, columnId, login) => {
    return {
        type: ADD_NEW_CARD,
        titleCard: titleCard,
        columnId: columnId,
        login: login
    }
}
export const renameCard = (cardTitle, cardIndex) => {
    return {
        type: RENAME_CARD,
        cardTitle: cardTitle, 
        cardIndex: cardIndex
    }
}
export function deleteCard (cardIndex, cardId){
    return dispatch => {
        dispatch({
            type: DELETE_COMMENTS_IN_CARD,
            cardId
        })
        dispatch({
            type: DELETE_CARD,
            cardIndex
        })
    }
}
export const deleteCommentsInCard = (cardId) => {
    return {
        type: DELETE_COMMENTS_IN_CARD,
        cardId
    }
}
export const changeCardDescription = (description, cardIndex) => {
    return {
        type: CHANGE_CARD_DESCRIPTION,
        description,
        cardIndex
    }
}

const initialState = {
    cards: JSON.parse(localStorage.getItem('cards'))
}

export const cardReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_NEW_CARD:
            {const { cards } = state
            let id
            if (cards[cards.length-1]){
                id = cards[cards.length-1].id + 10;}
            else { id = 1;}
            cards[cards.length] = {
                nameCard: action.titleCard, 
                idColumn: action.columnId, 
                login: action.login, 
                id: id, 
                description: ""
            }
            let serialObj4 = JSON.stringify(cards);
            localStorage.setItem('cards', serialObj4);
            return { ...state, cards: cards }; }

        case RENAME_CARD:
            {const { cards } = state;
            cards[action.cardIndex].nameCard = action.cardTitle;
            let serialObj5 = JSON.stringify(cards);
            localStorage.setItem('cards', serialObj5);
            return { ...state, cards: cards };}
        
        case DELETE_CARDS_IN_COLUMN:{
            const { cards } = state;
            for ( let i=0; i < cards.length; i++ ) {
                if ( action.columnId === cards[i].idColumn ){
                    cards.splice( i, 1 );
                    i= i-1;
                }
            }
            let serialObj6 = JSON.stringify(cards);
            localStorage.setItem('cards', serialObj6);
            return { ...state, cards: cards };
        }

        case DELETE_CARD:
            {const { cards } = state;
            let cards2= cards.filter((v, index) => action.cardIndex !== index )
            let serialObj6 = JSON.stringify(cards2);
            localStorage.setItem('cards', serialObj6);
            return { ...state, cards: cards2 };
        }
        case CHANGE_CARD_DESCRIPTION:
            {const { cards } = state;
            cards[action.cardIndex].description = action.description;
            let serialObj7 = JSON.stringify(cards);
            localStorage.setItem('cards', serialObj7);
            return { ...state, cards: cards };}

        default:
            return state;
    }
}