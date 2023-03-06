import {combineReducers} from 'redux'
import authReducer from './auth'
import currentUserReducer from './currUserReducer'
import questionReducer from './question';
import usersReducers from './users';

export default combineReducers({
    authReducer, currentUserReducer, questionReducer, usersReducers
})