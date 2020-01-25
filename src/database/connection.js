import mysql from "mysql";
import config from "./config";
import view from "../views";

const connection = mysql.createConnection(config);
connection.connect(function(err) {
  if (err) throw err;
  view.displayTable;
});

module.exports = connection;
