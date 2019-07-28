import React, { Component } from 'react'
import instagram from '../../img/instagram.gif';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6  text-center">
              <img className="instaphone" src={instagram} alt="instagram"></img>
            </div>
            <div className="col-md-6 text-center">
              <h5 className="display-3 mb-4 black-font">Instagram 
              </h5>
              <p className="lead black-font"> Sign up to see photos and videos from your developer friends.</p>
              <hr />
              <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
              <Link to="login" className="btn btn-lg btn-light">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
