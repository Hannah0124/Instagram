import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthtoken';
import { setCurrentUser, logoutUser } from './actions/authActions';


// (1) Check for token 
if (localStorage.jwtToken) {
  // (2) Set auth token header 
  setAuthToken(localStorage.jwtToken);
  // (3) Decode 
  const decoded = jwt_decode(localStorage.jwtToken);
  // (4) Set user isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;

  // If expired, time to log out 
  if (decoded.exp < currentTime) {

    // (1) Call logoutUser 
    store.dispatch(logoutUser());

    // (2) Clear current profile 


    // (3) Redirect the user to login
    window.location.href = '/login';
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          {/* Route to /register or /login         */}
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
          <Footer />
        </div>
       </Router>
    </Provider>
  );
}

export default App;
