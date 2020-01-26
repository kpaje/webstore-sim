import Mutation from "./Mutation";

function buyProduct(id, input) {
  const query =
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?";
  new Mutation(query).sendSQLQuery(id, input);
}

function sellProduct(id, input) {
  const query =
    "UPDATE products SET stock_quantity = stock_quantity + ? WHERE id = ?";
  new Mutation(query).sendSQLQuery(id, input);
}

function updateProductPrice(id, input) {
  const query = "UPDATE products SET price = ? WHERE id = ?";
  new Mutation(query).sendSQLQuery(id, input);
}

export { buyProduct, sellProduct, updateProductPrice };
