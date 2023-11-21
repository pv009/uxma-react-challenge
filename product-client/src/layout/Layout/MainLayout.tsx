import Home from "../../pages/Home/Home";
import Products from "../../pages/Products/Products";
import React from "react";
import {AppBar, Box, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {mainTheme} from "../Theme/theme";
import HomeIcon from '@mui/icons-material/Home';
import styles from './MainLayout.module.scss';

const MainLayout = () => (
    <ThemeProvider theme={mainTheme}>
        <header>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                        href="/"
                    >
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                        Fake-Store
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
        <main className={styles.mainContainer}>
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
        </main>
        <footer>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Fake-Store, made with love by Paul Voges
                    </Typography>
                </Toolbar>
            </AppBar>
        </footer>
    </ThemeProvider>
);

export default MainLayout;