import axiosInstance from "./request";

export const addProduct = (data: any) => axiosInstance.post('product', data);