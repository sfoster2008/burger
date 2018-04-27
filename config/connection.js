var mysql = require('mysql')

var config = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'sequelstuff1234',
  database: 'quotes_db',
  port: 8889
})

config.connect(function (e) {
  if (e) throw e
})

module.exports = config
