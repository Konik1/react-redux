import { bindActionCreators } from 'redux'

export const ADD_COLUMNS = 'ADD_COLUMNS'
export const RENAME_COLUMNS = 'RENAME_COLUMNS'
export const DELETE_COLUMNS = 'DELETE_COLUMNS'

export const ADD_NEW_CARD = 'ADD_NEW_CARD'
export const RENAME_CARD = 'RENAME_CARD'
export const DELETE_CARD = 'DELETE_CARD'
export const CHANGE_CARD_DESCRIPTION = 'CHANGE_CARD_DESCRIPTION'

export const ADD_COMMENT = 'ADD_COMMENT'
export const CHANGE_COMMENT = 'CHANGE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const ADD_LOGIN = 'ADD_LOGIN'




/* export const CHANGE_CARDS = 'CHANGE_CARDS'
export const CHANGE_CARD_DESCRIPTION = 'CHANGE_CARD_DESCRIPTION'
export const CHANGE_CARD_COMMENTS = 'CHANGE_CARD_COMMENTS'
export const CHANGE_LOGIN_OBJ = 'CHANGE_LOGIN_OBJ' */

export const addColumns = (columns) => {
    return {
        type: ADD_COLUMNS,
        payload: columns
    }
}
export const renameColumns = (titleColumn, columnIndex) => {
    return {
        type: RENAME_COLUMNS,
        titleColumn: titleColumn, 
        columnIndex: columnIndex
    }
}
export const deleteColumns = (columnIndex) => {
    return {
        type: DELETE_COLUMNS,
        columnIndex
    }
}
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
export const deleteCard = (cardIndex, cardId) => {
    return {
        type: DELETE_CARD,
        cardIndex, 
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

export const addComment = (login, comment, cardId) => {
    return {
        type: ADD_COMMENT,
        login, 
        comment, 
        cardId
    }
}
export const changeComment = (comment, index) => {
    return {
        type: CHANGE_COMMENT,
        comment, 
        index
    }
}
export const deleteComment = (indexComment) => {
    return {
        type: DELETE_COMMENT,
        indexComment
    }
}
export const addLogin = (login) => {
    return {
        type: ADD_LOGIN,
        login
    }
}




/* export const changeCards = (cards) => {
    let serialObj = JSON.stringify(cards);
    localStorage.setItem('cards', serialObj);
    return {
        type: CHANGE_CARDS,
        payload: cards
    }
}
export const changeCardDescription = (cardDescription) => {
    let serialObj = JSON.stringify(cardDescription);
    localStorage.setItem('cardDescription', serialObj);
    return {
        type: CHANGE_CARD_DESCRIPTION,
        payload: cardDescription
    }
}
export const changeCardComments = (cardComments) => {
    let serialObj = JSON.stringify(cardComments);
    localStorage.setItem('cardComments', serialObj);
    return {
        type: CHANGE_CARD_COMMENTS,
        payload: cardComments
    }
}
export const changeLoginObj = (loginObj) => {
    let serialObj = JSON.stringify(loginObj);
    localStorage.setItem('loginObj', serialObj);
    return {
        type: CHANGE_LOGIN_OBJ,
        payload: loginObj
    }
} */


 /* export const stateToProps = (state) =>{
    return {
        columns: state.columns,
        cards: state.cards,
        cardComments: state.cardComments,
        loginObj: state.loginObj
    }
}
export const dispatchToProps = (dispatch) => {
    return {
        addColumns: bindActionCreators(addColumns, dispatch),
        renameColumns: bindActionCreators(renameColumns, dispatch),
        deleteColumns: bindActionCreators(deleteColumns, dispatch),

        addNewCard: bindActionCreators(addNewCard, dispatch),
        renameCard: bindActionCreators(renameCard, dispatch),
        deleteCard: bindActionCreators(deleteCard, dispatch),
        changeCardDescription: bindActionCreators(changeCardDescription, dispatch),

        addComment: bindActionCreators(addComment, dispatch),
        changeComment: bindActionCreators(changeComment, dispatch),
        deleteComment: bindActionCreators(deleteComment, dispatch),

        addLogin: bindActionCreators(addLogin, dispatch)
    }
}  */