import {combineReducers} from 'redux';
import authReducer from './authReducer';

// Combine reducers 
export default combineReducers({
  auth: authReducer
})