import axiosInstance from "./request";

export const getCustom = (config?: any) => axiosInstance.get('customers', { params: config });

export const blockCustom = (url?: any) => axiosInstance.post(url);

export const changeCustom=(url?:any)=>axiosInstance.post(url)


export const configCustome = {
    navigate:"/customer",
    urlInfo: "",
    urlEdit: "customer",
    urlAdd: "customer/change_type",
    urlGetInfo:"customer",
    urlDelete:"banner?banner_id="
}