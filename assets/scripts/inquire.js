const inquirer = require("inquirer");
import connection from "./config";
import { sqlQuery } from "./sql";
import {
	inputBuy,
	inputSell,
	inputUpdate,
	inputQTY,
	inputPrice
} from "./prompts";
import views from "./views";

export const inquire = {
	routeInput: function(response) {
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
	},
	createMenuPrompts: function(populateMenu) {
		return inquirer.prompt(populateMenu).then(inquire.routeInput);
	},
	buy: function() {
		inquirer
			.prompt([inputBuy.promptID(), inputQTY.promptQTY()])
			.then(function(data) {
				sqlQuery.buy(data.id, data.qty);
				views.globalUI();
			});
	},
	sell: function() {
		inquirer
			.prompt([inputSell.promptID(), inputQTY.promptQTY()])
			.then(function(data) {
				sqlQuery.sell(data.id, data.qty);
				views.globalUI();
			});
	},
	updatePrice: function() {
		inquirer
			.prompt([inputUpdate.promptID(), inputPrice.promptQTY()])
			.then(function(data) {
				sqlQuery.updatePrice(data.id, data.price);
				views.globalUI();
			});
	}
};
