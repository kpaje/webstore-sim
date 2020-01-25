import "inquirer";
import Prompt from "./Prompt";

const inputMenu = new Prompt();
const inputBuy = new Prompt("buy");
const inputSell = new Prompt("sell");
const inputUpdate = new Prompt("price update");
const inputQTY = new Prompt(undefined, "qty");
const inputPrice = new Prompt(undefined, "price");

export { inputMenu, inputBuy, inputSell, inputUpdate, inputQTY, inputPrice };
