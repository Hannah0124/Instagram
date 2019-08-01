import {SET_CURRENT_USER} from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
  isAuthenticated: false,
  user: {}
}

// export function(state, action)
export default function(state = initialState, action) {
  //Dispatcher is a type of the action
  switch(action.type) {
    case SET_CURRENT_USER: {
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    }
    default:
      return state;
  }  
}