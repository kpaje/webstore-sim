import connection from "./config";

export const sqlQuery = {
  runQuery: function(sql, data) {
    connection.query(sql, data, function(err, res) {
      if (err) throw err;
      return res;
    });
  },
  allData: function() {
    const sql = "SELECT * FROM products";
    return new Promise(function(resolve, reject) {
      connection.query(sql, function(err, res) {
        if (res === undefined) {
          reject(new Error("Error res is undefined"));
        } else {
          resolve(res);
        }
      });
    });
  },
  populateAllData: function(table, menu) {
    this.allData().then(function(res) {
      table(res);
      menu();
    });
  },
  buy: function(id, input) {
    const sql =
      "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?";
    const data = [input, id];
    this.runQuery(sql, data);
  },
  sell: function(id, input) {
    const sql =
      "UPDATE products SET stock_quantity = stock_quantity + ? WHERE id = ?";
    const data = [input, id];
    this.runQuery(sql, data);
  },
  updatePrice: function(id, input) {
    const sql = "UPDATE products SET price = ? WHERE id = ?";
    const data = [input, id];
    this.runQuery(sql, data);
  }
};
