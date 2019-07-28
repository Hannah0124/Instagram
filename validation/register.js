const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.email = !isEmpty(data.email)? data.email : '';
  // data.fullName = !isEmpty(data.fullName)? data.fullName : '';
  data.userName = !isEmpty(data.userName)? data.userName : '';
  data.password = !isEmpty(data.password)? data.password : '';
  data.password2 = !isEmpty(data.password2)? data.password2 : '';

  // if (!validator.isLength(data.fullName, {min: 2, max: 30})) {
  //   errors.fullName = "Full name must be between 2 and 30 characters";
  // }

  if (!validator.isEmail(data.email)) {
    errors.email = "Email must be formatted correctly (e.g. info@info.com)";
  }

  if (!validator.isLength(data.userName, {min: 2, max: 30})) {
    errors.userName = "User name must be between 2 and 30 characters";
  }

  if (!validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (validator.isEmpty(data.userName)) {
    errors.userName = "User name field is required";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Password must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}