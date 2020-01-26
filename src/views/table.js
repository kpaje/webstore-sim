import "console.table";
import eventHandlers from "../eventHandlers";

function table() {
  return eventHandlers.formatTableData(console.table);
}

export default table;
