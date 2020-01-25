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

class Query {
	constructor(promptID, promptQTY) {
		this.promptID = promptID;
		this.promptQTY = promptQTY;
	}

	processQuery() {
		const prompts = [this.promptID.promptID(), this.promptQTY.promptQTY()];
		inquirer.prompt(prompts).then(function(data) {
			sqlQuery.buy(data.id, data.qty);
			views.globalUI();
		});
	}
}

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
		new Query(inputBuy, inputQTY).processQuery();
	},
	sell: function() {
		const prompts = [inputSell.promptID(), inputQTY.promptQTY()];
		inquirer.prompt(prompts).then(function(data) {
			sqlQuery.sell(data.id, data.qty);
			views.globalUI();
		});
	},
	updatePrice: function() {
		const prompts = [inputUpdate.promptID(), inputPrice.promptQTY()];
		inquirer.prompt(prompts).then(function(data) {
			sqlQuery.updatePrice(data.id, data.price);
			views.globalUI();
		});
	}
};
