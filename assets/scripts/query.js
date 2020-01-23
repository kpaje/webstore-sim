const view = require("./view");
const connection = require("./connection");

var query = {
  sqlBuy:
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?",
  sqlSell:
    "UPDATE products SET stock_quantity = stock_quantity + ? WHERE id = ?",
  sqlUpdatePrice: "UPDATE products SET price = ? WHERE id = ?",

  runQuery: function(sql, data, viewResult) {
    connection.query(sql, data, function(err) {
      if (err) throw err;
      viewResult();
    });
  },
  buy: function(id, input) {
    var sql = query.sqlBuy;
    var data = [input, id];
    query.runQuery(sql, data, view.displayTable);
  },
  sell: function(id, input) {
    var sql = query.sqlSell;
    var data = [input, id];
    query.runQuery(sql, data, view.displayTable);
  },
  updatePrice: function(id, input) {
    var sql = query.sqlUpdatePrice;
    var data = [input, id];
    query.runQuery(sql, data, view.displayTable);
  }
};

module.exports = query;
