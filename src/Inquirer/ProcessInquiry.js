import inquirer from "inquirer";
import sqlQuery from "../database/sqlQuery";
import showGlobalUI from "../views/globalUI";

class ProcessInquiry {
  constructor(itemID, itemAmount) {
    this.itemID = itemID;
    this.itemAmount = itemAmount;
  }

  processBuyMethod() {
    const prompts = [
      this.itemID.promptItemID(),
      this.itemAmount.promptItemAmount()
    ];
    inquirer.prompt(prompts).then(function(data) {
      sqlQuery.buy(data.id, data.qty);
      showGlobalUI();
    });
  }
  processSellMethod() {
    const prompts = [
      this.itemID.promptItemID(),
      this.itemAmount.promptItemAmount()
    ];
    inquirer.prompt(prompts).then(function(data) {
      sqlQuery.sell(data.id, data.qty);
      showGlobalUI();
    });
  }
  processUpdatePriceMethod() {
    const prompts = [
      this.itemID.promptItemID(),
      this.itemAmount.promptItemAmount()
    ];
    inquirer.prompt(prompts).then(function(data) {
      sqlQuery.updatePrice(data.id, data.price);
      showGlobalUI();
    });
  }
}

export default ProcessInquiry;
