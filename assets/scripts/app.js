const inquirer = require("inquirer");
const mysql = require("mysql");
const colors = require('colors');
const config = require('./config');
cTable = require('console.table');

const connection = mysql.createConnection(config);
connection.connect(function (err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId + "\n");
	view.displayTable();
});

var view = {
	displayTable: function () {
		console.clear();
		console.log("WELCOME TO THE BAMAZON STORE 1998" .magenta)
		var sql = "SELECT * FROM products";
		connection.query(sql, function (err, res) {
			if (err) throw err;
			console.table(res);
			view.displayMenu();
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
			view.displayTable();
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

//Inquirer npm constructor
function Inquirer(type, message, name) {
	this.type = type;
	this.message = message;
	this.name = name;
};
Inquirer.prototype.printPrompt = function () {
	return {
		type: this.type,
		message: "What item would you like to " + this.message + "?",
		name: this.name,
		validate: app.validate,
	}
};
Inquirer.prototype.printQTY = function () {
	return {
		type: this.type,
		message: "Input amount",
		name: this.name,
		validate: app.validate,
	}
};

var app = {
	validate: function (input) {
		if (input.length < 1) {
			console.log("missing input" .red)
			return false;
		} else {
			return true;
		}
	},
	buy: function () {
		var inputID = new Inquirer("input", "buy", "id");
		var inputQTY = new Inquirer("input", "buy", "qty");
		inquirer.prompt([
				inputID.printPrompt(),
				inputQTY.printQTY(),
			])
			.then(function (data) {
				query.buy(data.id, data.qty);
			})
	},
	sell: function () {
		var inputID = new Inquirer("input", "sell", "id");
		var inputQTY = new Inquirer("input", "sell", "qty");
		inquirer.prompt([
				inputID.printPrompt(),
				inputQTY.printQTY(),
			])
			.then(function (data) {
				query.sell(data.id, data.qty);
			})
	},
	updatePrice: function () {
		var inputID = new Inquirer("input", "price update", "id");
		var inputQTY = new Inquirer("input", "update", "price");
		inquirer.prompt([
				inputID.printPrompt(),
				inputQTY.printQTY(),
			])
			.then(function (data) {
				query.updatePrice(data.id, data.price);
			})
	},
};