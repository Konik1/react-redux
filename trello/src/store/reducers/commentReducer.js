import { ADD_COMMENT,
    CHANGE_COMMENT,
    DELETE_COMMENT } from '../actions';

const initialState = {
    cardComments: JSON.parse(localStorage.getItem('cardComments'))
}

export const commentReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_COMMENT:
            {const { cardComments } = state
            let id
            if (cardComments[cardComments.length-1]){
                 id = cardComments[cardComments.length-1].id + 10;}
            else { id = 1;}
            cardComments[cardComments.length] = {login: action.login, comment: action.comment, idCard: action.cardId, id: id}
            let serialObj8 = JSON.stringify(cardComments);
            localStorage.setItem('cardComments', serialObj8);
            return { ...state, cardComments: cardComments };}

        case CHANGE_COMMENT:
            {const { cardComments } = state
            cardComments[action.index].comment = action.comment;
            let serialObj9 = JSON.stringify(cardComments);
            localStorage.setItem('cardComments', serialObj9);
            return { ...state, cardComments: cardComments };}

        case DELETE_COMMENT:
            {const { cardComments } = state
            let cardComments2= cardComments.filter((v, index) => action.indexComment !== index )
            let serialObj10 = JSON.stringify(cardComments2);
            localStorage.setItem('cardComments', serialObj10);
            return { ...state, cardComments: cardComments2 };}

        default:
            return state;
    }
}