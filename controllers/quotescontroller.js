var Quotes = require('../models/quotesmodel.js')

var express = require('express')

var router = express.Router()

router.get('/quotes', function (req, res) {
  var quotes = Quotes.allQuotes()
  res.render('index', {quotes: quotes})
})

module.exports = router
