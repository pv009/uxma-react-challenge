import * as dotenv from 'dotenv'
dotenv.config()
import pg from 'pg'
import {Product} from "../model/product.model";

const { Pool } = pg;
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.PRODUCTS_DB,
    password: process.env.POSTGRES_PASSWORD,
});

function getAllProducts() {
    return pool.query<Product>('SELECT * FROM products');
}

export default {
    getAllProducts,
};