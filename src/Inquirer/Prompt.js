import "inquirer";
import eventHandlers from "../eventHandlers";

class Prompt {
  constructor(selectedMenuChoice, itemName) {
    this.selectedMenuChoice = selectedMenuChoice;
    this.itemName = itemName;
  }
  promptItemID() {
    return {
      type: "input",
      message:
        "What item would you like to " + `${this.selectedMenuChoice}` + "?",
      name: "id",
      validate: eventHandlers.validateUserInput
    };
  }
  promptItemAmount() {
    return {
      type: "input",
      message: "Input amount",
      name: `${this.itemName}`,
      validate: eventHandlers.validateUserInput
    };
  }
  promptMenuOptions() {
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

export default Prompt;
