import "console.table";
import { inquire } from "../Inquirer/inquire";
import { sqlQuery } from "../database/sql";
import { inputMenu } from "../Inquirer/prompts";

const views = {
  globalUI: function() {
    console.clear();
    console.log("WELCOME TO THE BAMAZON STORE 1998".magenta);
    sqlQuery.populateAllData(console.table, this.menuUI);
  },
  menuUI: function() {
    inquire.createMenuPrompts(inputMenu.promptMenu());
  }
};

export default views;
