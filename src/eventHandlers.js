import "colors";
import sqlQuery from "./database/sqlQuery";
import inquire from "./Inquirer/inquire";
import connection from "./database/connection";

const eventHandlers = {
  validateUserInput: function(input) {
    if (input === ("0" || null || undefined)) {
      console.log("please input a product id".red);
      return false;
    } else if (input < 1) {
      console.log("missing input".red);
      return false;
    } else {
      return true;
    }
  },
  formatTableData: function(consoleTable) {
    const assembleTable = result => {
      consoleTable(result);
    };
    sqlQuery.allData().then(assembleTable);
  },
  routeUserInput: function(userInput) {
    const input = userInput.command;
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
  //Must be used within a Promise() because of resolve()
  promiseQueryResult: function(query) {
    const verifyResult = resolve => {
      return (error, data) => {
        if (data === undefined) {
          throw error;
        } else {
          resolve(data);
        }
      };
    };
    return data => {
      connection.query(query, verifyResult(data));
    };
  }
};

export default eventHandlers;
