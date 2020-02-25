import ProcessInquiry from "./classes/ProcessInquiry";
import {
	inputBuy,
	inputSell,
	inputUpdate,
	inputQuantity,
	inputPrice
} from "./prompts";

const inquire = {
	buy: function() {
		new ProcessInquiry(inputBuy, inputQuantity).processBuyMethod();
	},
	sell: function() {
		new ProcessInquiry(inputSell, inputQuantity).processSellMethod();
	},
	updatePrice: function() {
		new ProcessInquiry(inputUpdate, inputPrice).processUpdatePriceMethod();
	}
};

export default inquire;
