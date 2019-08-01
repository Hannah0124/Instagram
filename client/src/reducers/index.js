import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

// Combine reducers 
export default combineReducers({
  auth: authReducer,
  errors: errorReducer
})