import { ADD_LOGIN } from '../actions';

const initialState = {
    loginObj: JSON.parse(localStorage.getItem('loginObj'))
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_LOGIN:
            const {loginObj} = state
            loginObj[0] = {login: action.login}
            let serialObj11 = JSON.stringify(loginObj);
            localStorage.setItem('loginObj', serialObj11);
            return { ...state, loginObj: loginObj };

        default:
            return state;
    }
}