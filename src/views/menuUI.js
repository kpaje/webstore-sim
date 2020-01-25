import inquirer from "inquirer";
import eventHandlers from "../eventHandlers";
import { inputMenu } from "../Inquirer/prompts";

function createMenuPrompts(populateMenu) {
  return inquirer.prompt(populateMenu).then(eventHandlers.routeInput);
}

function menuUI() {
  return createMenuPrompts(inputMenu.promptMenu());
}

export default menuUI;
