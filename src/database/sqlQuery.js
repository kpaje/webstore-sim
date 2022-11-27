import eventHandlers from "../eventHandlers";
import { buyItem, sellItem, updateItemPrice } from "./mutation/mutations";

const sqlQuery = {
	allData: function () {
		const query = "SELECT * FROM products";
		return new Promise(eventHandlers.promiseQueryResult(query));
	},

	buy: function (id, data) {
		buyItem(id, data);
	},
	sell: function (id, data) {
		sellItem(id, data);
	},
	updatePrice: function (id, data) {
		updateItemPrice(id, data);
	},
};

export default sqlQuery;
