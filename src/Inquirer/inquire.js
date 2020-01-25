const inquirer = require("inquirer");
import connection from "../database/config";
import { sqlQuery } from "../database/sql";
import {
  inputBuy,
  inputSell,
  inputUpdate,
  inputQTY,
  inputPrice
} from "./prompts";
import globalUI from "../views/globalUI";

class Query {
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

export const inquire = {
  routeInput: function(response) {
    var input = response.command;
    if (input === "buy") {
      inquire.buy();
    } else if (input === "sell") {
      inquire.sell();
    } else if (input === "update-price") {
      inquire.updatePrice();
    } else if (input === "exit") {
      connection.end();
    }
  },
  createMenuPrompts: function(populateMenu) {
    return inquirer.prompt(populateMenu).then(inquire.routeInput);
  },
  buy: function() {
    new Query(inputBuy, inputQTY).processBuy();
  },
  sell: function() {
    new Query(inputSell, inputQTY).processSell();
  },
  updatePrice: function() {
    new Query(inputUpdate, inputPrice).processUpdatePrice();
  }
};
