import connection from "./config";

export const sql = {
	runQuery: function(sql, data) {
		connection.query(sql, data, function(err, res) {
			if (err) throw err;
		});
	},
	buy: function(id, input) {
		var sql =
			"UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?";
		var data = [input, id];
		this.runQuery(sql, data);
	},
	sell: function(id, input) {
		var sql =
			"UPDATE products SET stock_quantity = stock_quantity + ? WHERE id = ?";
		var data = [input, id];
		this.runQuery(sql, data);
	},
	updatePrice: function(id, input) {
		var sql = "UPDATE products SET price = ? WHERE id = ?";
		var data = [input, id];
		this.runQuery(sql, data);
	}
};
