import express, { Request, Response } from 'express';
import productRoutes from './routes/products';
import cors from 'cors';

const app = express();
const port = process.env.API_PORT || 3001;
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/', (req: Request, res: Response) => {
    res.send('Congrats, your API works!');
});

app.use('/products', productRoutes);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});