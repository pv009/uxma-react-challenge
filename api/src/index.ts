import express, { Request, Response } from 'express';
import productRoutes from './routes/products';

const app = express();
const port = process.env.API_PORT || 3001;


app.get('/', (req: Request, res: Response) => {
    res.send('Congrats, your API works!');
});

app.use('/products', productRoutes);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});