var orm = require('../config/orm.js')

var burgers = {
  allBurgers: function () {
    orm.selectAll('burgers', function (r) {
      return r
    })
  },
  specificQuote: function (colName, value) {
    orm.selectWhere('burgers', colName, value, function (r) {
      return r
    })
  },
  updateQuote: function (colCheck, valueCheck, colName, value) {
    orm.updateWhere('burgers', colCheck, valueCheck, colName, value, function (r) {
      return r
    })
  }
}

module.exports = quotes