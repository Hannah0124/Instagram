import React, { Component } from 'react'

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
            </div>
            <div className="col-md-6 text-center">
              <h5 className="display-3 mb-4 black-font">Instagram 
              </h5>
              <p className="lead black-font"> Sign up to see photos and videos from your developer friends.</p>
              <hr />
              <a href="register.html" className="btn btn-lg btn-info mr-2">Sign Up</a>
              <a href="login.html" className="btn btn-lg btn-light">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
