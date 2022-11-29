import "inquirer";
import Prompt from "./classes/Prompt";

const mainMenu = new Prompt();
const buyMenu = new Prompt("buy");
const sellMenu = new Prompt("sell");
const updateMenu = new Prompt("price update");
const quantity = new Prompt(undefined, "qty");
const price = new Prompt(undefined, "price");

export { mainMenu, buyMenu, sellMenu, updateMenu, quantity, price };
