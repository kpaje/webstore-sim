const inquirer = require("inquirer");
import connection from "./config";
import "console.table";
import {
	inputBuy,
	inputSell,
	inputUpdate,
	inputQTY,
	inputPrice
} from "./prompts";
import { interfaceUI } from "./views";

connection.connect(function(err) {
	if (err) throw err;
	interfaceUI();
});

export const query = {
	runQuery: function(sql, data, displayApp) {
		connection.query(sql, data, function(err, res) {
			if (err) throw err;
			displayApp;
		});
	},
	buy: function(id, input) {
		var sql =
			"UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?";
		var data = [input, id];
		query.runQuery(sql, data, interfaceUI());
	},
	sell: function(id, input) {
		var sql =
			"UPDATE products SET stock_quantity = stock_quantity + ? WHERE id = ?";
		var data = [input, id];
		query.runQuery(sql, data, interfaceUI());
	},
	updatePrice: function(id, input) {
		var sql = "UPDATE products SET price = ? WHERE id = ?";
		var data = [input, id];
		query.runQuery(sql, data, interfaceUI());
	}
};

export const inquire = {
	buy: function() {
		inquirer
			.prompt([inputBuy.promptID(), inputQTY.promptQTY()])
			.then(function(data) {
				query.buy(data.id, data.qty);
			});
	},
	sell: function() {
		inquirer
			.prompt([inputSell.promptID(), inputQTY.promptQTY()])
			.then(function(data) {
				query.sell(data.id, data.qty);
			});
	},
	updatePrice: function() {
		inquirer
			.prompt([inputUpdate.promptID(), inputPrice.promptQTY()])
			.then(function(data) {
				query.updatePrice(data.id, data.price);
			});
	}
};
