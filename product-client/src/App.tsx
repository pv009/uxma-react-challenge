import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { Box } from '@mui/material';

const App: React.FC = () => (
    <BrowserRouter>
        <Box sx={{
            p: 2
        }}>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
          </Routes>
        </Box>
    </BrowserRouter>
);

export default App;
