import "inquirer";
import Prompt from "./classes/Prompt";

const inputMenuOptions = new Prompt();
const inputBuy = new Prompt("buy");
const inputSell = new Prompt("sell");
const inputUpdate = new Prompt("price update");
const inputQuantity = new Prompt(undefined, "qty");
const inputPrice = new Prompt(undefined, "price");

export {
	inputMenuOptions,
	inputBuy,
	inputSell,
	inputUpdate,
	inputQuantity,
	inputPrice
};
