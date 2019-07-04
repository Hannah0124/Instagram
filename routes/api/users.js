// Import express to add more routes
const express = require('express');
const gravatar = require('gravatar');
// import bcrypt JS to encrypt password
const bcrypt = require('bcryptjs');

// Within the express library, I only want to use “Router() function”
const router = express.Router();

// Bring in my User model
const User = require('../../models/User')

// @route  POST api/users/register
// @desc   Register user (description of my API)
// @access Public (Publicly open to anybody)
router.post('/register', (req, res) => {
  User.findOne({email: req.body.email})
    .then(user => {
      if (user) {
        return res.status(400).json({
          email: 'Email already exists'
        })
      } else {
        // Make a call to the gravatar API 
        const avatar = gravatar.url(req.body.email, {
          s: '200',
          r: 'pg',
          d: 'mm'
        })
        // Create an instance of the User
        const newUser = new User({
          email: req.body.email,
          fullName: req.body.fullName, 
          userName: req.body.userName,
          password: req.body.password,
          avatar
        });

        // Generate salt (key)
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
            // Print out user object
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch(err => console.log(err));
});

// @route  POST api/users/login
// @desc   Login user (description of my API)
// @access Public (Publicly open to anybody)
router.post('/login', (req,res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find User by email 
  User.findOne({email})
    .then(user => {
      if (!user) {
        return res.status(404).json({
          email: 'User not found'
        });
      }
    })
    .catch(err => console.log(err));
})

module.exports = router;