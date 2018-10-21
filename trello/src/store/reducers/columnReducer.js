import { ADD_COLUMNS, DELETE_COLUMNS, RENAME_COLUMNS } from '../actions';

const initialState = {
    columns: JSON.parse(localStorage.getItem('columns'))
}

export const columnReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_COLUMNS:
            const { columns } = state
            let id
            if (columns[columns.length-1]){
                id = columns[columns.length-1].id + 10;}
            else { id = 1;}
            columns[columns.length] = {nameColumn: "новая колонка", id: id}
            let serialObj1 = JSON.stringify(columns);
            localStorage.setItem('columns', serialObj1);
            return { ...state, columns: columns };

        case RENAME_COLUMNS:
            const { columns } = state
            columns[columnIndex].nameColumn = titleColumn;
            let serialObj2 = JSON.stringify(columns);
            localStorage.setItem('columns', serialObj2);
            return { ...state, columns: columns };

        case DELETE_COLUMNS:
            const { columns } = state
            let columns= columns.filter((v, index) => columnIndex !== index )
            let serialObj3 = JSON.stringify(columns);
            localStorage.setItem('columns', serialObj3);
            return { ...state, columns: action.payload };

        default:
            return state;
    }
}