import eventHandlers from "../eventHandlers";
import {
  buyProduct,
  sellProduct,
  updateProductPrice
} from "./mutation/mutations";

const sqlQuery = {
  allData: function() {
    const query = "SELECT * FROM products";
    return new Promise(eventHandlers.promiseQueryResult(query));
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
