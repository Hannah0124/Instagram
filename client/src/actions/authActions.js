import {GET_ERRORS, SET_CURRENT_USER} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthtoken'
import jwt_decode from 'jwt-decode';

export const registerUser = (userData, history) => dispatch => {
  // Ready to fire my API
  // Call axios.post('the path of my API, userData)
  axios
    .post('/api/users/register', userData)
    // Push to goto /login route
    .then(res => history.push('/login'))
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

export const loginUser = userData => dispatch => {
  // Ready to fire my API 
  axios 
    .post('/api/users/login', userData)
    .then(res => {
      // Take the token from the res
      const {token} = res.data 

      // Set token to local storage - (setItem(key, value))
      localStorage.setItem('jwtToken', token);

      // Set token to auth header
      setAuthToken(token);

      // Decode token to get user data
      const decoded = jwt_decode(token);

      // Set current user in the Redux store
      dispatch(setCurrentUser(decoded))
    })
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

export const logoutUser = () => dispatch => {
  // (1) Remove token from local storage 
  localStorage.removeItem('jwtToken');

  // (2) Remove token form auth headers 
  setAuthToken(false);

  // (3) Clean the user data from Redux store
  dispatch(setCurrentUser({}));
}