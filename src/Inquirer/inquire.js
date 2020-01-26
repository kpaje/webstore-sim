import ProcessInquiry from "./ProcessInquiry";
import {
  inputBuy,
  inputSell,
  inputUpdate,
  inputQuantity,
  inputPrice
} from "./prompts";

const inquire = {
  buy: function() {
    new ProcessInquiry(inputBuy, inputQuantity).processBuy();
  },
  sell: function() {
    new ProcessInquiry(inputSell, inputQuantity).processSell();
  },
  updatePrice: function() {
    new ProcessInquiry(inputUpdate, inputPrice).processUpdatePrice();
  }
};

export default inquire;
