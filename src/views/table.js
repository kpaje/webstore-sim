import "console.table";
import eventHandlers from "../eventHandlers";

function table() {
  return eventHandlers.populateTableData(console.table);
}

export default table;
