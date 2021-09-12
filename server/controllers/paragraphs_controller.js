const express = require('express')
const router = express.Router();
const Paragraphs = require('../model/paragraphs_model')

router.get('/15', (req, res) => {
  Paragraphs.limit15()
    .then(paragraphs => res.json(paragraphs))
})

router.get('/30', (req, res) => {
  Paragraphs.limit30()
    .then(paragraphs => res.json(paragraphs))
})

router.get('/50', (req, res) => {
  Paragraphs.limit50()
    .then(paragraphs => res.json(paragraphs))
})

module.exports = router