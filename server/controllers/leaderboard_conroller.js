const express = require('express')
const router = express.Router();
const fetchLeaderboard = require('../model/leaderboard_model')

router.get('/', (req, res) => {
  fetchLeaderboard()
    .then(row => res.json(row))
})

module.exports = router