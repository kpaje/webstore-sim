import connection from "./config";
import "console.table";
import { views } from "./views";

export const sqlQuery = {
	runQuery: function(sql, data) {
		connection.query(sql, data, function(err, res) {
			if (err) throw err;
		});
	},
	all: function() {
		const sql = "SELECT * FROM products";
		return new Promise(function(resolve, reject) {
			connection.query(sql, function(err, rows) {
				if (rows === undefined) {
					reject(new Error("Error rows is undefined"));
				} else {
					resolve(rows);
				}
			});
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
