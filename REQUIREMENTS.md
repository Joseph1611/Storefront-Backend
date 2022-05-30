## Table 
CREATE TABLE users (
   id SERIAL PRIMARY  KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    password VARCHAR(100)NOT NULL
);


CREATE TABLE products (
  	 id serial primary key,
	name VARCHAR(100),
	price  integer
   
);



CREATE TABLE orders(
   id SERIAL PRIMARY  KEY,
    status VARCHAR(50),
    user_id BIGINT REFERENCES users(id)
)


CREATE TABLE orders_products(
    id SERIAL PRIMARY KEY, 
    quanitiy integer,
    order_id BIGINT REFERENCES orders(id),
    product_id BIGINT REFERENCES products(id)
);


## Routes

Users Routes

[Get] http://localhost:7000/users [token required]
[Post] http://localhost:7000/users
{"first_name":"youssef", 
"last_name":"nour",
"password":"be_paient"}

[GET] http://localhost:7000/users/1 [token required]


Products Routes

[GET] http://localhost:7000/products

[Post] http://localhost:7000/products [token required]
{
    "name":"chiken",
    "prices":20
}


Orders routes 
[GET] http://localhost:7000/orders [token required]
{"user_id":1}
[post] http://localhost:7000/orders/1 [token required]
{"user_id":1}
[post] http://localhost:7000/orders/1/products [token required]
{ "quantity":10,
        "product_id":1,
        "user_id":1}

        Popular Products Routes

[GET] http://localhost:7000/orderdProducts






