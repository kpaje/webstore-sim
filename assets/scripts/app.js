import connection from "./config";
import { interfaceUI } from "./views";

connection.connect(function(err) {
	if (err) throw err;
	interfaceUI();
});
