import Mutation from "./Mutation";

function buyItem(id, input) {
	const query =
		"UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?";
	new Mutation(query).sendSQLQuery(id, input);
}

function sellItem(id, input) {
	const query =
		"UPDATE products SET stock_quantity = stock_quantity + ? WHERE id = ?";
	new Mutation(query).sendSQLQuery(id, input);
}

function updateItemPrice(id, input) {
	const query = "UPDATE products SET price = ? WHERE id = ?";
	new Mutation(query).sendSQLQuery(id, input);
}

export { buyItem, sellItem, updateItemPrice };
