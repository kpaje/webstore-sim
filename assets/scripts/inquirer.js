const inquirer = require("inquirer");
const query = require("./query");
const Prompt = require("./prompts");

const inputBuy = new Prompt("buy");
const inputSell = new Prompt("sell");
const inputUpdate = new Prompt("price update");
const inputQTY = new Prompt(undefined, "qty");
const inputPrice = new Prompt(undefined, "price");

var inquire = {
  buy: function() {
    inquirer
      .prompt([inputBuy.promptID(), inputQTY.promptQTY()])
      .then(function(data) {
        query.buy(data.id, data.qty);
      });
  },
  sell: function() {
    inquirer
      .prompt([inputSell.promptID(), inputQTY.promptQTY()])
      .then(function(data) {
        query.sell(data.id, data.qty);
      });
  },
  updatePrice: function() {
    inquirer
      .prompt([inputUpdate.promptID(), inputPrice.promptQTY()])
      .then(function(data) {
        query.updatePrice(data.id, data.price);
      });
  }
};

module.exports = inquire;
