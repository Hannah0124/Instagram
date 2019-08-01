import axios from 'axios';

const setAuthToken = token => {
  // When a user logs in
  if (token) {
    // Set authrization in the Headers 
    axios.defaults.headers.common['Authorization'] = token;
    // When the user logs out
  } else {
    // Delete the token
    delete axios.defaults.headers.common['Authorization']
  }
};

export default setAuthToken;