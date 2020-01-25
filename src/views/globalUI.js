import table from "./table";
import menuUI from "./menuUI";

function assembleInterface() {
  //prevents interface overlapping table when it is fetching data
  setTimeout(() => {
    menuUI();
  }, 10);
  table();
}

function globalUI() {
  console.clear();
  console.log("WELCOME TO THE BAMAZON STORE 1998".magenta);
  assembleInterface();
}

export default globalUI;
