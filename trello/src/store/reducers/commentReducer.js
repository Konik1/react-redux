import { ADD_COMMENT,
    CHANGE_COMMENT,
    DELETE_COMMENT } from '../actions';

const initialState = {
    cardComments: JSON.parse(localStorage.getItem('cardComments'))
}

export const commentReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_COMMENT:
            const { cardComments } = state
            let id
            if (cardComments[cardComments.length-1]){
                 id = cardComments[cardComments.length-1].id + 10;}
            else { id = 1;}
            cardComments[cardComments.length] = {login: login, comment: comment, idCard: cardId, id: id}
            let serialObj8 = JSON.stringify(cardComments);
            localStorage.setItem('cards', serialObj8);
            return { ...state, cardComments: cardComments };

        case CHANGE_COMMENT:
            const { cardComments } = state
            cardComments[index].comment = comment;
            let serialObj9 = JSON.stringify(cardComments);
            localStorage.setItem('cards', serialObj9);
            return { ...state, cardComments: cardComments };

        case DELETE_COMMENT:
            const { cardComments } = state
            let cardComments= cardComments.filter((v, index) => indexComment !== index )
            let serialObj10 = JSON.stringify(cardComments);
            localStorage.setItem('cards', serialObj10);
            return { ...state, cardComments: cardComments };

        default:
            return state;
    }
}