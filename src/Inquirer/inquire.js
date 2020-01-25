import ProcessInquiry from "./ProcessInquiry";
import {
  inputBuy,
  inputSell,
  inputUpdate,
  inputQTY,
  inputPrice
} from "./prompts";

const inquire = {
  buy: function() {
    new ProcessInquiry(inputBuy, inputQTY).processBuy();
  },
  sell: function() {
    new ProcessInquiry(inputSell, inputQTY).processSell();
  },
  updatePrice: function() {
    new ProcessInquiry(inputUpdate, inputPrice).processUpdatePrice();
  }
};

export default inquire;
