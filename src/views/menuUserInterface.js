import inquirer from "inquirer";
import eventHandlers from "../eventHandlers";
import { mainMenu } from "../Inquirer/prompts";

function createMenuInterface(menuOptions) {
	return inquirer.prompt(menuOptions).then(eventHandlers.routeUserInput);
}

function showMenuUI() {
	return createMenuInterface(mainMenu.promptMenuItems());
}

export default showMenuUI;
