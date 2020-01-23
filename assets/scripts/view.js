const inquirer = require("inquirer");
const mysql = require("mysql");
const config = require("./config");
const eventHandlers = require("./eventHandlers");
// const connection = require("./connection");
require("colors");
require("console.table");

const connection = mysql.createConnection(config);
connection.connect(function(err) {
  if (err) throw err;
  view.displayTable();
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
  displayMenu: function() {
    inquirer.prompt(view.menuOptions).then(eventHandlers.inputResponse);
  },
  displayTable: function() {
    console.clear();
    console.log("WELCOME TO THE BAMAZON STORE 1998".magenta);
    view.inventoryTable();
  }
};

module.exports = view;
