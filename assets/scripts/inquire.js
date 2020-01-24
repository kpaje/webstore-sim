const inquirer = require("inquirer");
import { sql } from "./sql";
import {
	inputBuy,
	inputSell,
	inputUpdate,
	inputQTY,
	inputPrice
} from "./prompts";
import { interfaceUI } from "./views";

export const inquire = {
	buy: function() {
		inquirer
			.prompt([inputBuy.promptID(), inputQTY.promptQTY()])
			.then(function(data) {
				sql.buy(data.id, data.qty);
				interfaceUI();
			});
	},
	sell: function() {
		inquirer
			.prompt([inputSell.promptID(), inputQTY.promptQTY()])
			.then(function(data) {
				sql.sell(data.id, data.qty);
				interfaceUI();
			});
	},
	updatePrice: function() {
		inquirer
			.prompt([inputUpdate.promptID(), inputPrice.promptQTY()])
			.then(function(data) {
				sql.updatePrice(data.id, data.price);
				interfaceUI();
			});
	}
};
