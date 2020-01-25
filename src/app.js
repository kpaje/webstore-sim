import connection from "./database/config";
import globalUI from "./views/globalUI";

connection.connect(function(err) {
  if (err) throw err;
  globalUI();
});
