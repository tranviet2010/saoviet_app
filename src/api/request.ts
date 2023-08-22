// src/axiosInstance.ts
import axios, { AxiosRequestConfig, Method } from 'axios';


const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE,
    timeout: 10000,
})

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')?.slice(1, -1);
    if (token) {
        config.headers['Authorization'] = `Bearer eyJ1c2VyLWlkIjoyLCJtb2JpbGUiOiIwOTQzODE4MTkzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJsb2dpbiIsIk1vYmlsZU51bWJlciI6IjA5NDM4MTgxOTMiLCJyb2xlIjpbIlBBUlRORVJfQURNSU4iXSwiaXNfYWN0aXZhdGVkIjoiMSIsIm5pY2tuYW1lIjoiaHVuZ3ZtMiIsInR5cCI6IkJlYXJlciIsImZ1bGxuYW1lIjoiVnUgTWFuaCBIdW5nIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiaHVuZ3ZtMiIsImV4cCI6MTY5MTkxNTUzOSwiY3VzdF9pZCI6IjIiLCJpYXQiOjE2OTE5MTUzNTksImVtYWlsIjoiaHVuZ3ZtMkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IjA5NDM4MTgxOTMiLCJqdGkiOiI0M2NmNzkxYi04ZjIzLTRlYjgtYjQ4ZS1mYzg3NTNlMDcxNjIifQ.wb4egtmCcSuMJerhOIzL-yzZsToz20xAfnKxPbFmKa7m2OwtF9KrzYNYQpeIu3UER9WBK6YSmRLUaommlmun4UKok83LrL1Svwh8ROfj_6A2tTlzFQ9unnxB8_sGy3reo1XfRLFQiMAOaj7rbnW_a2nge1xhmofFS_1S56VZqtGCNN2pfs573fw109OWVS32G93d0h9EGUeRLA3y_v5ZkEMgXS1uWI1cqBGYHSKTVqj8dH9l_cJ0n5KiUTnw9asJ-NQqnSG39MFftgdcHRwJHetI8s6QNP1YrDkX3m6dLKpNd1BJZHJeynS6pGT-1-ghyZ8DAmnutPj5YsZ_91fWFw`;
    }
    return config;
})
export default axiosInstance;


export const addFormData = (url: any, data: any) => axiosInstance.post(url, data);
export const editFormRequest = (url: any, data: any) => axiosInstance.put(url, data);