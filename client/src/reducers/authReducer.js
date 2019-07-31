import {TEST_DISPATCH} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
}

// export function(state, action)
export default function(state = initialState, action) {
  //Dispatcher is a type of the action
  switch(action.type) {

    case TEST_DISPATCH: {
      return {
        ...state,
        user: action.payload
      }
    }
    default:
    return state;
  }  
}