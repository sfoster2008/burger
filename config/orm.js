var mysql = require('./connection.js')

var orm = {

  selectAll: function (tabName, cb) {
    mysql.query('SELECT * FROM ' + tabName, function (e, r) {
      if (e) throw e
      cb(r)
    })
  },
  selectWhere: function (tabName, colName, value, cb) {
    mysql.query('SELECT * FROM ?? WHERE ?? = ?', [tabName, colName, value], function (e, r) {
      if (e) throw e
      cb(r)
    })
  },
  updateWhere: function (tabName, colCheck, valueCheck, colName, value, cb) {
    mysql.query('UPDATE ?? SET ?? = ? WHERE ?? = ?', [tabName, colName, value, colCheck, valueCheck], function (e, r) {
      if (e) throw e
      cb(r)
    })
  }
}

module.exports = orm
