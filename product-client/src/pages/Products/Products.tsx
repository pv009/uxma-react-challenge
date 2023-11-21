import React, {useCallback, useEffect, useState} from 'react';
import {Product} from "../../model/product.model";
import { CircularProgress, Typography } from '@mui/material';
import styles from './Products.module.css';
import axiosInstance from '../../utils/axios';
import ProductCard from "../../components/products/ProductCard/ProductCard";

const ProductsPage = () => {
    const [loadedProducts, setLoadedProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [favorites, setFavorites] = useState<Number[]>([]);

    const loadProducts = useCallback(async () => {
        const productResponse = await axiosInstance.get<Product[]>('/products');
        setLoadedProducts(productResponse.data);
        setIsLoading(false);
    }, []);

    const getFavorites = () => {
        const favoritesInStorage = localStorage.getItem('favoriteProducts');
        if (favoritesInStorage) {
            setFavorites(JSON.parse(favoritesInStorage));
        } else {
            localStorage.setItem('favoriteProducts', JSON.stringify([]));
        }
    }

    const toggleFavorite = (productId: Number) => {
        const favoriteIndex = favorites.indexOf(productId);
        const newFavorites = [...favorites];
        if (favoriteIndex === -1) {
            newFavorites.push(productId);
        } else {
            newFavorites.splice(favoriteIndex, 1);
        }
        setFavorites(newFavorites)
        localStorage.setItem('favoriteProducts', JSON.stringify(newFavorites));
    }

    useEffect( () => {
        loadProducts().catch(error => { console.error('error loading products:', error); });
        getFavorites();
    }, []);


    return (
        <div className="main-page">
            <Typography variant="h2">Products Overview:</Typography>
            {isLoading  && (
                <CircularProgress />
            )}
            {!isLoading && loadedProducts.length && (
                <div className={styles.productsContainer}>
                    {loadedProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isFavorite={favorites.includes(product.id)}
                            favoriteHandler={toggleFavorite}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
export default ProductsPage;