var inquirer = require("inquirer");
// var Table = require('cli-table');
cTable = require('console.table');
var mysql = require("mysql");
let config = require('./config');

var connection = mysql.createConnection(config);
connection.connect(function (err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId + "\n");
	view.displayMenu();
});

var view = {
	displayTable: function () {
		var sql = "SELECT * FROM products";
		connection.query(sql, function (err, res) {
			if (err) throw err;
			console.table(res);
		});
	},
	displayMenu: function () {
		inquirer.prompt([{
			type: "list",
			message: "Please select a command",
			choices: ["buy", "sell", "update-price", "exit"],
			name: "command"
		}, ])
		.then(function (inquirerResponse) {
			var input = inquirerResponse.command
			if (input === "buy") {
				app.buy();
			} else if (input === "sell") {
				app.sell();
			} else if (input === "update-price") {
				app.updatePrice();
			} else if (input === "exit") {
				connection.end();
			}
		});
	},
}


var query = {
	runQuery: function (sql, data) {
		connection.query(sql, data, function (err, res) {
			if (err) throw err;
			view.displayTable()
		});
	}, 		
	display: function (input) {
		var sql = "SELECT * FROM products WHERE id = ?";
		var data = [input];
		query.runQuery(sql, data);
	},
	buy: function (id, input) {
		var sql = "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?";
		var data = [input, id];
		query.runQuery(sql, data);
	},
	sell: function (id, input) {
		var sql = "UPDATE products SET stock_quantity = stock_quantity + ? WHERE id = ?";
		var data = [input, id];
		query.runQuery(sql, data);
	},
	updatePrice: function (id, input) {
		var sql = "UPDATE products SET price = ? WHERE id = ?";
		var data = [input, id];
		query.runQuery(sql, data);
	},
};

var app = {
	validate: function (input) {
		if (input.length < 1) {
			console.log("missing input")
			return false;
		} else {
			return true;
		}
	},
	buy: function () {
		inquirer.prompt([
			{
				type: "input",
				message: "What item would you like to buy?",
				name: "id",
				validate: app.validate,
			},
			{
				type: "input",
				message: "How many?",
				name: "qty",
				validate: app.validate,
			}
	 ])
		.then(function (data) {
			query.buy(data.id, data.qty);
			view.displayMenu();
		})
	},
	sell: function () {
		inquirer.prompt([
			{
				type: "input",
				message: "What item would you like to sell?",
				name: "id",
				validate: app.validate,
			},
			{
				type: "input",
				message: "How many?",
				name: "qty",
				validate: app.validate,
			}
		])
		.then(function (data) {
			query.sell(data.id, data.qty);
			view.displayMenu();

		})
	},
	updatePrice: function () {
		inquirer.prompt([
			{
				type: "input",
				message: "What item would you like to update?",
				name: "id",
				validate: app.validate,
			},
			{
				type: "input",
				message: "Input new price?",
				name: "price",
				validate: app.validate,
			}
	 ])
		.then(function (data) {
			query.updatePrice(data.id, data.price);
			view.displayMenu();
		})
	},
};
