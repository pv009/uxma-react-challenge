import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.API_BASE_URL || 'https://fakestoreapi.com',
});

export default instance;
