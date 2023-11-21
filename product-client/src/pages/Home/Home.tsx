import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';

const HomePage: React.FC = () => (
    <div>
        <Typography variant="h1" sx={{mb: 2}}>Willkommen bei Fake-Store!</Typography>
        <Button variant="contained" href="/products">Zu den Produkten</Button>
    </div>
);

export default HomePage;