import dotenv from 'dotenv'
import { Pool } from 'pg'
dotenv.config()


dotenv.config()
 const {
    ENV,
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_TEST_DB,
    BCRYPT_PASSWORD,
    SALT_ROUNDS
} =  process.env 

const Client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    
});


if (ENV==='test'){const Client = new Pool({
    host: POSTGRES_HOST,
    database:POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,

})}
else/* (ENV==='dev')*/{const Client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
})}


export default Client