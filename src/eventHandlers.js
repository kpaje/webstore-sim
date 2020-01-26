import "colors";
import sqlQuery from "./database/sqlQuery";
import inquire from "./Inquirer/inquire";
import connection from "./database/connection";

const eventHandlers = {
  validateUserInput: function(input) {
    if (input.length < 1) {
      console.log("missing input".red);
      return false;
    } else {
      return true;
    }
  },
  formatTableData: function(table) {
    sqlQuery.allData().then(function(res) {
      table(res);
    });
  },
  routeInput: function(userInput) {
    var input = userInput.command;
    if (input === "buy") {
      inquire.buy();
    } else if (input === "sell") {
      inquire.sell();
    } else if (input === "update-price") {
      inquire.updatePrice();
    } else if (input === "exit") {
      connection.end();
    }
  }
};

export default eventHandlers;
