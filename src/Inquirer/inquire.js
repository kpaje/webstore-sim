import ProcessInquiry from "./classes/ProcessInquiry";
import {
	inputBuy,
	inputSell,
	inputUpdate,
	inputQuantity,
	inputPrice,
} from "./prompts";

const inquire = {
	buy: function () {
		new ProcessInquiry(inputBuy, inputQuantity).buy();
	},
	sell: function () {
		new ProcessInquiry(inputSell, inputQuantity).sell();
	},
	updatePrice: function () {
		new ProcessInquiry(inputUpdate, inputPrice).updatePrice();
	},
};

export default inquire;
