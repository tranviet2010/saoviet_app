// src/axiosInstance.ts
import axios from 'axios';
import { useSelector } from 'react-redux';
import store from '../stores';
import { State } from '../interface/layout/state.interface';


const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE,
    timeout: 10000,
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    console.log("token", token);
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;