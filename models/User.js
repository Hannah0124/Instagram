const mongoose = require('mongoose');

// Build a schema for my User model
const Schema = mongoose.Schema;

// Create an instance of the shcema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    defulat: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema)