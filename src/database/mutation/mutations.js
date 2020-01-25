import Mutation from "./Mutation";

function queryBuy(id, input) {
  const sql =
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?";
  new Mutation(sql).createSQLQuery(id, input);
}

function querySell(id, input) {
  const sql =
    "UPDATE products SET stock_quantity = stock_quantity + ? WHERE id = ?";
  new Mutation(sql).createSQLQuery(id, input);
}

function queryUpdatePrice(id, input) {
  const sql = "UPDATE products SET price = ? WHERE id = ?";
  new Mutation(sql).createSQLQuery(id, input);
}

export { queryBuy, querySell, queryUpdatePrice };
