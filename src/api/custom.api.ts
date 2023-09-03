import axiosInstance from "./request";

export const getCustom = (config?: any) => axiosInstance.get('customers', { params: config });


export const configCustome = {
    navigate:"/customer",
    urlInfo: "",
    urlEdit: "customer",
    urlAdd: "",
    urlGetInfo:"customer",
    urlDelete:"banner?banner_id="
}