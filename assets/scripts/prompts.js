require("inquirer");
const eventHandlers = require("./eventHandlers");

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
}

module.exports = Prompt;
