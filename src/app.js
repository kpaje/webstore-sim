import connection from "./database/connection";
import globalUserInterface from "./views/globalUserInterface";

connection.connect(function (err) {
	if (err) throw err;
	globalUserInterface();
});
