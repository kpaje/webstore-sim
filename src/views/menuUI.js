import inquirer from "inquirer";
import eventHandlers from "../eventHandlers";
import { inputMenuOptions } from "../Inquirer/prompts";

function createMenuInterface(menuOptions) {
  return inquirer.prompt(menuOptions).then(eventHandlers.routeUserInput);
}

function showMenuUI() {
  return createMenuInterface(inputMenuOptions.promptMenuOptions());
}

export default showMenuUI;
