import { ADD_COLUMNS,
    RENAME_COLUMNS,
    DELETE_COLUMNS,
    ADD_NEW_CARD,
    RENAME_CARD,
    DELETE_CARD,
    CHANGE_CARD_DESCRIPTION,
    ADD_COMMENT,
    CHANGE_COMMENT,
    DELETE_COMMENT,
    ADD_LOGIN,
} from './actions';

const initialState = {
    columns: JSON.parse(localStorage.getItem('columns')),
    cards: JSON.parse(localStorage.getItem('cards')),
    cardDescription: JSON.parse(localStorage.getItem('cardDescription')),
    cardComments: JSON.parse(localStorage.getItem('cardComments')),
    loginObj: JSON.parse(localStorage.getItem('loginObj'))
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_COLUMNS:
            let serialObj = JSON.stringify(action.payload);
            localStorage.setItem('columns', serialObj);
            return { ...state, columns: action.payload };
        case RENAME_COLUMNS:
            let serialObj2 = JSON.stringify(action.payload);
            localStorage.setItem('columns', serialObj2);
            return { ...state, columns: action.payload };
        case DELETE_COLUMNS:
            let serialObj3 = JSON.stringify(action.payload);
            localStorage.setItem('columns', serialObj3);
            return { ...state, columns: action.payload };

        case ADD_NEW_CARD:
            let serialObj4 = JSON.stringify(action.payload);
            localStorage.setItem('cards', serialObj4);
            return { ...state, cards: action.payload };
        case RENAME_CARD:
            let serialObj5 = JSON.stringify(action.payload);
            localStorage.setItem('cards', serialObj5);
            return { ...state, cards: action.payload };
        case DELETE_CARD:
            let serialObj6 = JSON.stringify(action.payload);
            localStorage.setItem('cards', serialObj6);
            return { ...state, cards: action.payload };
        case CHANGE_CARD_DESCRIPTION:
            let serialObj7 = JSON.stringify(action.payload);
            localStorage.setItem('cards', serialObj7);
            return { ...state, cards: action.payload };

        case ADD_COMMENT:
            let serialObj8 = JSON.stringify(action.payload);
            localStorage.setItem('cards', serialObj8);
            return { ...state, cardComments: action.payload };
        case CHANGE_COMMENT:
            let serialObj9 = JSON.stringify(action.payload);
            localStorage.setItem('cards', serialObj9);
            return { ...state, cardComments: action.payload };
        case DELETE_COMMENT:
            let serialObj10 = JSON.stringify(action.payload);
            localStorage.setItem('cards', serialObj10);
            return { ...state, cardComments: action.payload };

        case ADD_LOGIN:
            let serialObj11 = JSON.stringify(action.payload);
            localStorage.setItem('cards', serialObj11);
            return { ...state, loginObj: action.payload };
        default:
            return state;
    }
}