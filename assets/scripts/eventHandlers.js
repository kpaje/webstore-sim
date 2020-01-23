require("inquirer");
var inquire = require("./inquirer");
const connection = require("./connection");

var eventHandlers = {
  validateInput: function(input) {
    if (input.length < 1) {
      console.log("missing input".red);
      return false;
    } else {
      return true;
    }
  },
  routeInput: function(response) {
    response = response.command;
    if (response === "buy") {
      inquire.buy;
    } else if (response === "sell") {
      inquire.sell;
    } else if (response === "update-price") {
      inquire.updatePrice;
    } else if (response === "exit") {
      connection.end;
    }
  },
  inputResponse: function(response) {
    eventHandlers.routeInput(response);
  }
};

module.exports = eventHandlers;
