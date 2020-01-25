import connection from "./connection";
import { queryBuy, querySell, queryUpdatePrice } from "./mutation/mutations";

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
    queryBuy(id, input);
  },
  sell: function(id, input) {
    querySell(id, input);
  },
  updatePrice: function(id, input) {
    queryUpdatePrice(id, input);
  }
};

export default sqlQuery;
