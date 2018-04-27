var orm = require('../config/orm.js')

var quotes = {
  allQuotes: function () {
    orm.selectAll('quotes', function (r) {
      return r
    })
  },
  specificQuote: function (colName, value) {
    orm.selectWhere('quotes', colName, value, function (r) {
      return r
    })
  },
  updateQuote: function (colCheck, valueCheck, colName, value) {
    orm.updateWhere('quotes', colCheck, valueCheck, colName, value, function (r) {
      return r
    })
  }
}

module.exports = quotes
