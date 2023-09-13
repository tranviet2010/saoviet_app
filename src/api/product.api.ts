import axiosInstance from "./request";

export const addProduct = (data: any) => axiosInstance.post('product', data);

export const getProduct = (config?: any) => axiosInstance.get('products', { params: { ...config, limit: 100 } })

export const getProductAll = (config?: any) => axiosInstance.get('products', { params: config })



export const configProduct = {
    navigate: "/product",
    urlInfo: "",
    urlEdit: "product",
    urlAdd: "product",
    urlGetInfo: "product",
    urlDelete: "product?product-id=",
}