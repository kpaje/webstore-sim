import { inquire } from "../Inquirer/inquire";
import { inputMenu } from "../Inquirer/prompts";

function menuUI() {
  inquire.createMenuPrompts(inputMenu.promptMenu());
}

export default menuUI;
