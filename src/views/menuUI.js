import inquirer from "inquirer";
import { inquire } from "../Inquirer/inquire";
import { inputMenu } from "../Inquirer/prompts";

function createMenuPrompts(populateMenu) {
  return inquirer.prompt(populateMenu).then(inquire.routeInput);
}

function menuUI() {
  createMenuPrompts(inputMenu.promptMenu());
}

export default menuUI;
