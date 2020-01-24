const inquirer = require("inquirer");
import "console.table";
import { inquire } from "./inquire";
import { sqlQuery } from "./sql";

const views = {
	globalUI: function() {
		console.clear();
		console.log("WELCOME TO THE BAMAZON STORE 1998".magenta);
		sqlQuery.all().then(function(res) {
			console.table(res);
			views.menuUI();
		});
	},
	menuUI: function() {
		const populateMenu = [
			{
				type: "list",
				message: "Please select a command",
				choices: ["buy", "sell", "update-price", "exit"],
				name: "command"
			}
		];
		inquirer.prompt(populateMenu).then(inquire.routeInput);
	}
};

export default views;
