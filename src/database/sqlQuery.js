import connection from "./connection";
import Mutation from "./Mutation";

const sqlQuery = {
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
  buy: function(id, input) {
    const sql =
      "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?";
    new Mutation(sql).createSQLQuery(id, input);
  },
  sell: function(id, input) {
    const sql =
      "UPDATE products SET stock_quantity = stock_quantity + ? WHERE id = ?";
    new Mutation(sql).createSQLQuery(id, input);
  },
  updatePrice: function(id, input) {
    const sql = "UPDATE products SET price = ? WHERE id = ?";
    new Mutation(sql).createSQLQuery(id, input);
  }
};

export default sqlQuery;
