import { ADD_NEW_CARD,
    RENAME_CARD,
    DELETE_CARD,
    CHANGE_CARD_DESCRIPTION,
    DELETE_CARDS_IN_COLUMN } from '../actions';

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