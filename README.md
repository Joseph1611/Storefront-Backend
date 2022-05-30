## storeFront backend Project

to Get statring this App:
install all project dependencies wiht npm install 
2.set up Database 
### create user
* CREATE USER joe WITH PASSWORD 'be_yourself'

### Create Database one for dev and one for test 

```
* CREATE DATABASE  store
* CREATE DATABASE  store_test
* to give database to me :
\c store
  GRANT ALL PRIVILEGES ON DATABASE store TO joe;
  \c store_test
 GRANT ALL PRIVILEGES ON DATABASE store_test TO joe;
 
 ```

 ### create Tables 
 * npm  run migrations

 ### My Enviroment variables  
```
 POSTGRES_HOST=127.0.0.1
POSTGRES_DB=store
POSTGRES_TEST_DB=store_test
POSTGRES_USER=joe
POSTGRES_PASSWORD=be_yourself
BCRYPT_PASSWORD=be-paient-youssef
SALT_ROUNDS=10
TOkEN=be_paitent_to_reach
ENV=dev
```

### server work on port:6000, database work on port 5432

### To start a server 
```
* node build/server
* npm run watch 
```

### for testing
```
* npm  run migrations
* npm run test 
```
