import inquirer from "inquirer";
import sqlQuery from "../../database/sqlQuery";
import globalUserInterface from "../../views/globalUserInterface";

class ProcessInquiry {
	constructor(itemID, amount) {
		this.itemID = itemID;
		this.itemAmount = amount;
	}

	buy() {
		const prompts = [
			this.itemID.promptItemID(),
			this.itemAmount.promptItemAmount(),
		];
		inquirer.prompt(prompts).then(function (data) {
			sqlQuery.buy(data.id, data.qty);
			globalUserInterface();
		});
	}
	sell() {
		const prompts = [
			this.itemID.promptItemID(),
			this.itemAmount.promptItemAmount(),
		];
		inquirer.prompt(prompts).then(function (data) {
			sqlQuery.sell(data.id, data.qty);
			globalUserInterface();
		});
	}
	updatePrice() {
		const prompts = [
			this.itemID.promptItemID(),
			this.itemAmount.promptItemAmount(),
		];
		inquirer.prompt(prompts).then(function (data) {
			sqlQuery.updatePrice(data.id, data.price);
			globalUserInterface();
		});
	}
}

export default ProcessInquiry;
