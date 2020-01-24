const inquirer = require("inquirer");
import connection from "./config";
import "console.table";
import { inquire } from "./inquire";
import { sqlQuery } from "./sql";

export const views = {
	globalUI: function() {
		console.clear();
		console.log("WELCOME TO THE BAMAZON STORE 1998".magenta);
		sqlQuery.all().then(function(res) {
			console.table(res);
			createMenu();
		});
	},
	createMenu: function() {
		inquirer
			.prompt([
				{
					type: "list",
					message: "Please select a command",
					choices: ["buy", "sell", "update-price", "exit"],
					name: "command"
				}
			])
			.then(inquire.routeInput);
	}
};

export function createMenu() {
	inquirer
		.prompt([
			{
				type: "list",
				message: "Please select a command",
				choices: ["buy", "sell", "update-price", "exit"],
				name: "command"
			}
		])
		.then(inquire.routeInput);
}
