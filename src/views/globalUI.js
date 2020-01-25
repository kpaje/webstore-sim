import "console.table";
import { sqlQuery } from "../database/sql";
import menuUI from "./menuUI";

function globalUI() {
  console.clear();
  console.log("WELCOME TO THE BAMAZON STORE 1998".magenta);
  sqlQuery.populateAllData(console.table, menuUI);
}

export default globalUI;
