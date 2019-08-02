import React, { Component } from 'react'
import {registerUser} from '../../actions/authActions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
  constructor() {
    // Call parent
    super();
    // Create a state object 
    this.state = {
      email: '',
      fullName: '',
      userName: '',
      password: '',
      password2: '',
      errors: {}
    };

    // Give alias
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    // Change state
    // setState(stateToChange, newValueToCome)
    // console.log('this? ',this); // => Register
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();

    // Create a new user object
    const newUser = {
      // Read data from the local state
      email: this.state.email,
      fullName: this.state.fullName,
      userName: this.state.userName,
      password: this.state.password,
      password2: this.state.password2
    };

    // Trigger registerAction
    this.props.registerUser(newUser, this.props.history);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  // Get new data (props) from Redux
  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

  render() {
    const {user} = this.props.auth;
    const {errors} = this.state;
    return (
      <div className="register">
        {user? user.email : null}
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Instagram account</p>
              <form onSubmit={this.onSubmit} noValidate>
                <TextFieldGroup 
                  placeholder="email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                />
                <TextFieldGroup 
                  placeholder="Full Name"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.onChange}
                  error={errors.fullName}
                />
                <TextFieldGroup 
                  placeholder="Username"
                  name="userName"
                  value={this.state.userName}
                  onChange={this.onChange}
                  error={errors.userName}
                />
                <TextFieldGroup 
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextFieldGroup 
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

// Extract data from the state to UI
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

// Connect Register component with registerUser action
// // Quesition: What does withRouter do?
export default connect(mapStateToProps, {registerUser}) (withRouter(Register));
