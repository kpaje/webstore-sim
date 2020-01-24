const inquirer = require("inquirer");
import connection from "./config";
import "console.table";
import { inquire } from "./inquire";
import { sqlQuery } from "./sql";

export const views = {
	globalUI: function() {
		console.clear();
		console.log("WELCOME TO THE BAMAZON STORE 1998".magenta);
		const res = sqlQuery.all().then(function(results) {
			console.table(results);
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
