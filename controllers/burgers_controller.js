var Quotes = require('../models/quotesmodel.js')

var express = require('express')

var router = express.Router()

router.get('/burgers', function (req, res) {
  var burgers = Burgers.allBurgers()
  res.render('index', {burgers: burgers})
})

module.exports = router