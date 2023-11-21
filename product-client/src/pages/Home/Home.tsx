import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => (
    <div>
        <h1>Hello on fake store!</h1>
        <Link to="/products">
            <Button variant="contained">Go to products</Button>
        </Link>
    </div>
);

export default HomePage;