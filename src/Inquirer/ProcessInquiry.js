import inquirer from "inquirer";
import sqlQuery from "../database/sqlQuery";
import globalUI from "../views/globalUI";

class ProcessInquiry {
  constructor(promptID, promptQTY) {
    this.promptID = promptID;
    this.promptQTY = promptQTY;
  }

  processBuy() {
    const prompts = [this.promptID.promptID(), this.promptQTY.promptQTY()];
    inquirer.prompt(prompts).then(function(data) {
      sqlQuery.buy(data.id, data.qty);
      globalUI();
    });
  }
  processSell() {
    const prompts = [this.promptID.promptID(), this.promptQTY.promptQTY()];
    inquirer.prompt(prompts).then(function(data) {
      sqlQuery.sell(data.id, data.qty);
      globalUI();
    });
  }
  processUpdatePrice() {
    const prompts = [this.promptID.promptID(), this.promptQTY.promptQTY()];
    inquirer.prompt(prompts).then(function(data) {
      sqlQuery.updatePrice(data.id, data.price);
      globalUI();
    });
  }
}

export default ProcessInquiry;
