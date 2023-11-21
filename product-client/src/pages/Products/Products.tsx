import React, {useCallback, useEffect, useState} from 'react';
import {Product} from "../../model/product.model";
import { CircularProgress, Typography } from '@mui/material';
import styles from './Products.module.scss';
import axiosInstance from '../../utils/axios';
import ProductCard from "../../components/products/ProductCard/ProductCard";
import SortAndFilter from "../../components/products/SortAndFilter/SortAndFilter";

const ProductsPage = () => {
    const [loadedProducts, setLoadedProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [showOnlyFavorites, setShowOnlyFavorites] = useState<boolean>(false);
    const [sort, setSort] = useState<string>('asc');

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

    const productIsFavorite = (productId: number) => {
        return favorites.includes(productId);
    }

    const toggleFavorite = (productId: number) => {
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

    const sortProductsByPrice = (sortBy: string) => {
        setSort(sortBy);
        const sortedProducts = [...loadedProducts];
        if (sortBy === 'asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        setLoadedProducts(sortedProducts);
    }

    const filterProductsByFavorites = (filterFavorites: boolean) => {
        setShowOnlyFavorites(filterFavorites);
    }

    useEffect( () => {
        loadProducts().catch(error => { console.error('error loading products:', error); });
        getFavorites();
    }, []);


    return (
        <div className="main-page">
            <Typography variant="h1">Produkt-Katalog:</Typography>
            {isLoading  && (
                <CircularProgress />
            )}
            {!isLoading && loadedProducts.length && (
                <div className={styles.productsContainer}>
                    <SortAndFilter
                        sortHandler={sortProductsByPrice}
                        filterHandler={filterProductsByFavorites}
                        sort={sort}
                        filterFavorites={showOnlyFavorites}
                    />
                    {loadedProducts
                        .filter(product => productIsFavorite(product.id) || !showOnlyFavorites)
                        .map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isFavorite={productIsFavorite(product.id)}
                            favoriteHandler={toggleFavorite}
                        />
                    ))}
                </div>
            )}
            {!isLoading && !loadedProducts.length && (
                <Typography variant="h3">No products found</Typography>
            )}
        </div>
    );
}
export default ProductsPage;