import connection from "./database/connection";
import globalUI from "./views/globalUI";

connection.connect(function (err) {
	if (err) throw err;
	globalUI();
});
