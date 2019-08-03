import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import NotFound from './components/not-found/NotFound';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthtoken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { clearCurrentProfile } from './actions/profileActions';
import PrivateRoute from './components/common/PrivateRoute';


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
    store.dispatch(clearCurrentProfile());
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
            <Route exact path="/profiles" component={Profiles} />
            <Route exact path="/profile/:handle" component={Profile} />


            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            </Switch>
            <Switch>
              <PrivateRoute exact path="/create-profile" component={CreateProfile}/>
            </Switch>
            <Switch>
              <PrivateRoute exact path="/edit-profile" component={EditProfile}/>
            </Switch>

            <Switch>
              <PrivateRoute exact path="/feed" component={Posts}/>
            </Switch>
            <Switch>
              <PrivateRoute exact path="/post/:id" component={Post}/>
            </Switch>
            <Switch>
              <PrivateRoute exact path="/not-found" component={NotFound}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
