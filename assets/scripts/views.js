import connection from "./config";
const inquirer = require("inquirer");
import "console.table";
import { inquire } from "./app";

export function interfaceUI() {
	console.clear();
	console.log("WELCOME TO THE BAMAZON STORE 1998".magenta);
	connection.query("SELECT * FROM products", function(err, res) {
		if (err) throw err;
		console.table(res);
		displayMenu();
	});
}

function displayMenu() {
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
				inquire.buy();
			} else if (input === "sell") {
				inquire.sell();
			} else if (input === "update-price") {
				inquire.updatePrice();
			} else if (input === "exit") {
				connection.end();
			}
		});
}
