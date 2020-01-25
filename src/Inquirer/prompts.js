import "inquirer";
import eventHandlers from "../eventHandlers";

class Prompt {
  constructor(message, name) {
    this.message = message;
    this.name = name;
  }
  promptID() {
    return {
      type: "input",
      message: "What item would you like to " + `${this.message}` + "?",
      name: "id",
      validate: eventHandlers.validateInput
    };
  }
  promptQTY() {
    return {
      type: "input",
      message: "Input amount",
      name: `${this.name}`,
      validate: eventHandlers.validateInput
    };
  }
  promptMenu() {
    return [
      {
        type: "list",
        message: "Please select a command",
        choices: ["buy", "sell", "update-price", "exit"],
        name: "command"
      }
    ];
  }
}

const inputMenu = new Prompt();
const inputBuy = new Prompt("buy");
const inputSell = new Prompt("sell");
const inputUpdate = new Prompt("price update");
const inputQTY = new Prompt(undefined, "qty");
const inputPrice = new Prompt(undefined, "price");

export { inputMenu, inputBuy, inputSell, inputUpdate, inputQTY, inputPrice };
