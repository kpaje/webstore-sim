import "console.table";
import eventHandlers from "../eventHandlers";

function showTable() {
  return eventHandlers.formatTableData(console.table);
}

export default showTable;
