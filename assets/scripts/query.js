const mysql = require("mysql");
const config = require("./config");
const inquirer = require("inquirer");

const connection = mysql.createConnection(config);
connection.connect(function(err) {
  if (err) throw err;
  view.displayApp();
});

var view = {
  displayApp: function() {
    console.clear();
    console.log("WELCOME TO THE BAMAZON STORE 1998".magenta);
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.table(res);
      view.displayMenu();
    });
  },
  displayMenu: function() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Please select a command",
          choices: ["buy", "sell", "update-price", "exit"],
          name: "command"
        }
      ])
      .then(function(response) {
        var input = response.command;
        if (input === "buy") {
          app.buy();
        } else if (input === "sell") {
          app.sell();
        } else if (input === "update-price") {
          app.updatePrice();
        } else if (input === "exit") {
          connection.end();
        }
      });
  }
};

var query = {
  runQuery: function(sql, data) {
    connection.query(sql, data, function(err, res) {
      if (err) throw err;
      view.displayApp();
    });
  },
  buy: function(id, input) {
    var sql =
      "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?";
    var data = [input, id];
    query.runQuery(sql, data);
  },
  sell: function(id, input) {
    var sql =
      "UPDATE products SET stock_quantity = stock_quantity + ? WHERE id = ?";
    var data = [input, id];
    query.runQuery(sql, data);
  },
  updatePrice: function(id, input) {
    var sql = "UPDATE products SET price = ? WHERE id = ?";
    var data = [input, id];
    query.runQuery(sql, data);
  }
};

module.exports = query;
