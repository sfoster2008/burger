// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')
var morgan = require('morgan')
var expresshbs = require('express-handlebars')

// new express app
var app = express()

var helpers = {
  test: function (string) {
    return 'This is the string : ' + string
  },
  stringGenerator: function () {}
}
// middleware
app.engine('hbs', expresshbs({defaultLayout: 'main', extname: '.hbs', helpers: helpers}))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(morgan('dev'))
var quoteRouter = require('./controllers/quotescontroller.js')
app.use(quoteRouter)


// your code here...
app.get('/', function (req, res) {
  res.render('index', {str: 'james'})
})

var PORT = process.env.PORT || 3000

// listening port
app.listen(PORT, function (e) {
  if (e) throw e
})
