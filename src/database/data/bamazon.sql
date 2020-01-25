DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products(
  id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dirt", "real_estate", 1522, 39),
("Lumber", "construction", 8655, 36),
("Water", "real_estate", 2398, 35),
("Oil", "real_estate", 9090, 35),
("Minerals", "trade", 3442, 25),
("Electricity", "trade", 7241, 34),
("Plastic", "trade", 1993, 34),
("Metal", "construction", 6880, 32),
("Concrete", "construction", 3283, 31),
("Seeds", "farmers", 1921, 31);