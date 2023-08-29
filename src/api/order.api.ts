import axiosInstance from "./request";

export const getOrder = (config?: any) => axiosInstance.get('order-request/sum', { params: config });
export const getOrderFromDate = (config?: any) => axiosInstance.get('order-request/partner', { params: config });
