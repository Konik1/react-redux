import { ADD_NEW_CARD,
    RENAME_CARD,
    DELETE_CARD,
    CHANGE_CARD_DESCRIPTION } from '../actions';

const initialState = {
    cards: JSON.parse(localStorage.getItem('cards'))
}

export const cardReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_NEW_CARD:
            const { cards } = state
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
            return { ...state, cards: cards }; 

        case RENAME_CARD:
            const { cards } = state;
            cards[cardIndex].nameCard = cardTitle;
            let serialObj5 = JSON.stringify(cards);
            localStorage.setItem('cards', serialObj5);
            return { ...state, cards: cards };

        case DELETE_CARD:
            const { cards } = state;
            let cards= cards.filter((v, index) => cardIndex !== index )
            let serialObj6 = JSON.stringify(cards);
            localStorage.setItem('cards', serialObj6);
            return { ...state, cards: cards };

        case CHANGE_CARD_DESCRIPTION:
            const { cards } = state;
            cards[cardIndex].description = description;
            let serialObj7 = JSON.stringify(cards);
            localStorage.setItem('cards', serialObj7);
            return { ...state, cards: cards };

        default:
            return state;
    }
}