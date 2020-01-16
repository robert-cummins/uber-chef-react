import { combineReducers } from 'redux';
import chefReducer from './chef'
import auth from './auth'


export default combineReducers({
    chefReducer,
    auth
})