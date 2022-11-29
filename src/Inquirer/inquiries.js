import Inquiry from "./classes/Inquiry";
import { buyItem, sellItem, updateItem, quantity, price } from "./prompts";

const inquiries = {
	buy: function () {
		new Inquiry(buyItem, quantity).buy();
	},
	sell: function () {
		new Inquiry(sellItem, quantity).sell();
	},
	updatePrice: function () {
		new Inquiry(updateItem, price).updatePrice();
	},
};

export default inquiries;
