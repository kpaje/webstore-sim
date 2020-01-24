const mysql = require("mysql");

const config = {
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazon_DB"
};

const connection = mysql.createConnection(config);

export default connection;
