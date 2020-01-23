const inquirer = require("inquirer");
const mysql = require("mysql");
const config = require("./config");
// const query = require("./query");
require("colors");
require("console.table");

const connection = mysql.createConnection(config);
connection.connect(function(err) {
  if (err) throw err;
  view.displayApp();
});

var view = {
  menuOptions: {
    type: "list",
    message: "Please select a command",
    choices: ["buy", "sell", "update-price", "exit"],
    name: "command"
  },
  inventoryTable: function() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.table(res);
      view.displayMenu();
    });
  },
  routeInput: function(response, app) {
    response = response.command;
    if (response === "buy") {
      app.buy();
    } else if (response === "sell") {
      app.sell();
    } else if (response === "update-price") {
      app.updatePrice();
    } else if (response === "exit") {
      connection.end();
    }
  },
  userResponse: function(response) {
    view.routeInput(response, app);
  },
  displayMenu: function() {
    inquirer.prompt(view.menuOptions).then(view.userResponse);
  },
  displayApp: function() {
    console.clear();
    console.log("WELCOME TO THE BAMAZON STORE 1998".magenta);
    view.inventoryTable();
  }
};

var query = {
  sqlBuy:
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?",
  sqlSell:
    "UPDATE products SET stock_quantity = stock_quantity + ? WHERE id = ?",
  sqlUpdatePrice: "UPDATE products SET price = ? WHERE id = ?",
  runQuery: function(sql, data, viewResult) {
    connection.query(sql, data, function(err) {
      if (err) throw err;
      viewResult.displayApp();
    });
  },
  buy: function(id, input) {
    var sql = query.sqlBuy;
    var data = [input, id];
    query.runQuery(sql, data, view);
  },
  sell: function(id, input) {
    var sql = query.sqlSell;
    var data = [input, id];
    query.runQuery(sql, data, view);
  },
  updatePrice: function(id, input) {
    var sql = query.sqlUpdatePrice;
    var data = [input, id];
    query.runQuery(sql, data, view);
  }
};

//Create inquirer prompts
class Inquirer {
  constructor(message, name) {
    this.message = message;
    this.name = name;
  }
  promptID() {
    return {
      type: "input",
      message: "What item would you like to " + `${this.message}` + "?",
      name: "id",
      validate: app.validateInput
    };
  }
  promptQTY() {
    return {
      type: "input",
      message: "Input amount",
      name: `${this.name}`,
      validate: app.validateInput
    };
  }
}
const inputBuy = new Inquirer("buy");
const inputSell = new Inquirer("sell");
const inputUpdate = new Inquirer("price update");
const inputQTY = new Inquirer(undefined, "qty");
const inputPrice = new Inquirer(undefined, "price");

var app = {
  validateInput: function(input) {
    if (input.length < 1) {
      console.log("missing input".red);
      return false;
    } else {
      return true;
    }
  },
  buy: function() {
    inquirer
      .prompt([inputBuy.promptID(), inputQTY.promptQTY()])
      .then(function(data) {
        query.buy(data.id, data.qty);
      });
  },
  sell: function() {
    inquirer
      .prompt([inputSell.promptID(), inputQTY.promptQTY()])
      .then(function(data) {
        query.sell(data.id, data.qty);
      });
  },
  updatePrice: function() {
    inquirer
      .prompt([inputUpdate.promptID(), inputPrice.promptQTY()])
      .then(function(data) {
        query.updatePrice(data.id, data.price);
      });
  }
};
