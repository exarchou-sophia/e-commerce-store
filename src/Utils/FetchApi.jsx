import React, { useEffect } from 'react';

const fetchProductData = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        localStorage.setItem('productData', JSON.stringify(data));
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
};

const FetchApi = () => {
    useEffect(() => {
        fetchProductData();
    }, []);
};

export default FetchApi;