import {Product} from "../model/product.model";
import db from "../utils/db";
import { Router, Request, Response } from 'express';
import {QueryResult} from "pg";

const router = Router();
router.get('/', async (req: Request, res: Response) => {
    try {
        const productsResult: QueryResult<Product> = await db.getAllProducts();
        res.json(productsResult.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;