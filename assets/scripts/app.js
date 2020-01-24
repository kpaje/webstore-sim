const inquirer = require("inquirer");
const mysql = require("mysql");
const config = require("./config");
require("colors");
require("console.table");

const connection = mysql.createConnection(config);
connection.connect(function(err) {
	if (err) throw err;
	view.displayApp();
});

var view = {
	displayApp: function() {
		console.clear();
		console.log("WELCOME TO THE BAMAZON STORE 1998".magenta);
		connection.query("SELECT * FROM products", function(err, res) {
			if (err) throw err;
			console.table(res);
			view.displayMenu();
		});
	},
	displayMenu: function() {
		inquirer
			.prompt([
				{
					type: "list",
					message: "Please select a command",
					choices: ["buy", "sell", "update-price", "exit"],
					name: "command"
				}
			])
			.then(function(response) {
				var input = response.command;
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
	}
};

var query = {
	runQuery: function(sql, data) {
		connection.query(sql, data, function(err, res) {
			if (err) throw err;
			view.displayApp();
		});
	},
	buy: function(id, input) {
		var sql =
			"UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?";
		var data = [input, id];
		query.runQuery(sql, data);
	},
	sell: function(id, input) {
		var sql =
			"UPDATE products SET stock_quantity = stock_quantity + ? WHERE id = ?";
		var data = [input, id];
		query.runQuery(sql, data);
	},
	updatePrice: function(id, input) {
		var sql = "UPDATE products SET price = ? WHERE id = ?";
		var data = [input, id];
		query.runQuery(sql, data);
	}
};

//Create inquirer prompts
class Inquirer {
	constructor(message, name) {
		this.message = message;
		this.name = name;
	}
	promptID() {
		return {
			type: "input",
			message: "What item would you like to " + `${this.message}` + "?",
			name: "id",
			validate: app.validateInput
		};
	}
	promptQTY() {
		return {
			type: "input",
			message: "Input amount",
			name: `${this.name}`,
			validate: app.validateInput
		};
	}
}
const inputBuy = new Inquirer("buy");
const inputSell = new Inquirer("sell");
const inputUpdate = new Inquirer("price update");
const inputQTY = new Inquirer(undefined, "qty");
const inputPrice = new Inquirer(undefined, "price");

var app = {
	validateInput: function(input) {
		if (input.length < 1) {
			console.log("missing input".red);
			return false;
		} else {
			return true;
		}
	},
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
