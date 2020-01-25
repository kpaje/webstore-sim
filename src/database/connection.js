const mysql = require("mysql");
const config = require("./config");
const view = require("../views");

const connection = mysql.createConnection(config);
connection.connect(function(err) {
  if (err) throw err;
  view.displayTable;
});

module.exports = connection;
