import { combineReducers } from 'redux'
import { cardReducer } from './reducers/cardReducer'
import { columnReducer } from './reducers/columnReducer'
import { commentReducer } from './reducers/commentReducer'
import { loginReducer } from './reducers/loginReducer'

export default combineReducers({
    cardReducer,
    columnReducer,
    commentReducer,
    loginReducer
  })