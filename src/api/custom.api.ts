import axiosInstance from "./request";

export const getCustom = (config?: any) => axiosInstance.get('customers', { params: config });