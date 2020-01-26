import inquirer from "inquirer";
import sqlQuery from "../database/sqlQuery";
import globalUI from "../views/globalUI";

class ProcessInquiry {
  constructor(promptItemID, promptItemAmount) {
    this.promptItemID = promptItemID;
    this.promptItemAmount = promptItemAmount;
  }

  processBuy() {
    const prompts = [
      this.promptItemID.promptItemID(),
      this.promptItemAmount.promptItemAmount()
    ];
    inquirer.prompt(prompts).then(function(data) {
      sqlQuery.buy(data.id, data.qty);
      globalUI();
    });
  }
  processSell() {
    const prompts = [
      this.promptItemID.promptItemID(),
      this.promptItemAmount.promptItemAmount()
    ];
    inquirer.prompt(prompts).then(function(data) {
      sqlQuery.sell(data.id, data.qty);
      globalUI();
    });
  }
  processUpdatePrice() {
    const prompts = [
      this.promptItemID.promptItemID(),
      this.promptItemAmount.promptItemAmount()
    ];
    inquirer.prompt(prompts).then(function(data) {
      sqlQuery.updatePrice(data.id, data.price);
      globalUI();
    });
  }
}

export default ProcessInquiry;
