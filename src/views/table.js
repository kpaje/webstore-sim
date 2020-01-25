import "console.table";
import { sqlQuery } from "../database/sqlQuery";

function table() {
  return sqlQuery.populateAllData(console.table);
}

export default table;
