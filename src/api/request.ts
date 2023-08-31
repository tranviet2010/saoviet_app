// src/axiosInstance.ts
import axios, { AxiosRequestConfig, Method } from 'axios';
import store from '../stores';
import { setGlobalState } from '../stores/global.store';


const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE,
    // baseURL: "http://14.225.255.77:8088/e/admin/",
    timeout: 1000,
})

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    store.dispatch(
        setGlobalState({
            loading: true,
        })
    )
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
})


axiosInstance.interceptors.response.use(
    (config) => {
        store.dispatch(
            setGlobalState({
                loading: false,
            })
        )
        return config
    },
    () => { }
)


export default axiosInstance;


export const addFormData = (url: any, data: any) => axiosInstance.post(url, data);
export const editFormRequest = (url: any, data: any) => axiosInstance.put(url, data);
export const deleteFormRequest = (url: any, data: any) => axiosInstance.delete(url, data);
export const getParam = () => axiosInstance.get('ap_params', { params: { limit: 100 } })
