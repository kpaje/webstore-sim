import connection from "./connection";
import {
  buyProduct,
  sellProduct,
  updateProductPrice
} from "./mutation/mutations";

const sqlQuery = {
  allData: function() {
    const query = "SELECT * FROM products";
    return new Promise(function(resolve, reject) {
      connection.query(query, function(error, result) {
        if (result === undefined) {
          reject(new Error("Error result is undefined"));
        } else {
          resolve(result);
        }
      });
    });
  },
  buy: function(id, input) {
    buyProduct(id, input);
  },
  sell: function(id, input) {
    sellProduct(id, input);
  },
  updatePrice: function(id, input) {
    updateProductPrice(id, input);
  }
};

export default sqlQuery;
