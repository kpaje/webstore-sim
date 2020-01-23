const inquirer = require("inquirer");

class Inquirer {
  constructor(message, name) {
    this.message = message;
    this.name = name;
  }
  promptID() {
    return {
      type: "input",
      message: "What item would you like to " + `${this.message}` + "?",
      name: "id",
      validate: app.validateInput
    };
  }
  promptQTY() {
    return {
      type: "input",
      message: "Input amount",
      name: `${this.name}`,
      validate: app.validateInput
    };
  }
}
const inputBuy = new Inquirer("buy");
const inputSell = new Inquirer("sell");
const inputUpdate = new Inquirer("price update");
const inputQTY = new Inquirer(undefined, "qty");
const inputPrice = new Inquirer(undefined, "price");
