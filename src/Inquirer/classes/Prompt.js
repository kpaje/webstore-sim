import "inquirer";
import eventHandlers from "../../eventHandlers";

class Prompt {
	constructor(selectedMenuItem, itemName) {
		this.selectedMenuItem = selectedMenuItem;
		this.itemName = itemName;
	}
	promptItemID() {
		return {
			type: "input",
			message:
				"What item would you like to " + `${this.selectedMenuItem}` + "?",
			name: "id",
			validate: eventHandlers.validateUserInput,
		};
	}
	promptItemAmount() {
		return {
			type: "input",
			message: "Input amount",
			name: `${this.itemName}`,
			validate: eventHandlers.validateUserInput,
		};
	}
	promptMenuItems() {
		return [
			{
				type: "list",
				message: "Please select a command",
				choices: ["buy", "sell", "update-price", "exit"],
				name: "command",
			},
		];
	}
}

export default Prompt;
