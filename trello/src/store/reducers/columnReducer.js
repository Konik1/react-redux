const ADD_COLUMNS = 'ADD_COLUMNS'
const RENAME_COLUMNS = 'RENAME_COLUMNS'
const DELETE_COLUMNS = 'DELETE_COLUMNS'

const DELETE_CARDS_IN_COLUMN = 'DELETE_CARDS_IN_COLUMN'

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
export function deleteColumns (columnIndex, columnId){
    return dispatch => {
        dispatch({
            type: DELETE_CARDS_IN_COLUMN,
            columnId
        })
        dispatch({
            type: DELETE_COLUMNS,
            columnIndex
        })
    }
}

const initialState = {
    columns: JSON.parse(localStorage.getItem('columns'))
}

export const columnReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_COLUMNS:
            {const { columns } = state
            let id
            if (columns[columns.length-1]){
                id = columns[columns.length-1].id + 10;}
            else { id = 1;}
            columns[columns.length] = {nameColumn: "новая колонка", id: id}
            let serialObj1 = JSON.stringify(columns);
            localStorage.setItem('columns', serialObj1);
            return { ...state, columns: columns };}

        case RENAME_COLUMNS:
            {const { columns } = state
            columns[action.columnIndex].nameColumn = action.titleColumn;
            let serialObj2 = JSON.stringify(columns);
            localStorage.setItem('columns', serialObj2);
            return { ...state, columns: columns };}

        case DELETE_COLUMNS:
            {const { columns } = state
            let columns2= columns.filter((v, index) => action.columnIndex !== index )
            let serialObj3 = JSON.stringify(columns2);
            localStorage.setItem('columns', serialObj3);
            return { ...state, columns: columns2 };}

        default:
            return state;
    }
}