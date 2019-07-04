// Import express to add more routes
const express = require('express');

// Within the express library, I only want to use “Router() function”
const router = express.Router();

// Dummy data
router.get('/test', (req, res) => res.json({
  msg: "User works!"
}))

module.exports = router;