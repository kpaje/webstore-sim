import "colors";
import { sqlQuery } from "./database/sqlQuery";

const eventHandlers = {
  validateInput: function(input) {
    if (input.length < 1) {
      console.log("missing input".red);
      return false;
    } else {
      return true;
    }
  },
  populateTableData: function(table) {
    sqlQuery.allData().then(function(res) {
      table(res);
    });
  }
};

export default eventHandlers;
