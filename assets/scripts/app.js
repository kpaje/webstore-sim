import connection from "./config";
import { views } from "./views";

connection.connect(function(err) {
	if (err) throw err;
	views.globalUI();
});
