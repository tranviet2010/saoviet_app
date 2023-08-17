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
    const token = "eyJ1c2VyLWlkIjo0LCJtb2JpbGUiOiIwOTQzODE4MTkxIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJsb2dpbiIsIk1vYmlsZU51bWJlciI6IjA5NDM4MTgxOTEiLCJyb2xlIjpbIlNZU1RFTSJdLCJpc19hY3RpdmF0ZWQiOiIxIiwibmlja25hbWUiOiJodW5ndm0iLCJ0eXAiOiJCZWFyZXIiLCJmdWxsbmFtZSI6IlZ1IE1hbmggSHVuZyIsInByZWZlcnJlZF91c2VybmFtZSI6Imh1bmd2bSIsImV4cCI6MTY5MjE1ODczNSwiY3VzdF9pZCI6IjQiLCJpYXQiOjE2OTIxNTg1NTUsImVtYWlsIjoiaHVuZ3ZtQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiMDk0MzgxODE5MSIsImp0aSI6IjIwNTk1MGYzLTg0YmEtNDNhMC05MjcyLTNjMDMzZDljYzZmYSJ9.Uv2dTT5n-DNH9gGbLxQQK06P4DvxDfmd0zZKbIK5w3GE3FCN-uVZaMPB_v0wo3Hbog-nNujRBrxYZRvbOOQPrdcvLYUgjWAYHocE4Hp_W3XZOfApNQnNrePXnGkJaX9RG8XtZWMhYUzlhidHjzH0lXHBVUByCw4TJXj3MRn7NnVbb-R639wjTYcSWK7I00H_urvYM5ho30hFM8nrP1j6oMf-aH3YSqF80-XuUMQ43KQFr4d_KC7X1rJMWAGPfWUZwc_D-pM7XnH_XDTidfLH8PwY4DH1rq5QfOONnvNpvAylu0PyV17m0uqishIvVoCyYn984bzhPB3X5SIGGcwgTQ"
    console.log("token", token);
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;