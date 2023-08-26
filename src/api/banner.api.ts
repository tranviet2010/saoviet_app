import axiosInstance from "./request"


export const getBanner = (config?: any) => axiosInstance.get('banners', { params: config });


export const configBanner = {
    navigate:"/banner",
    urlInfo: "",
    urlEdit: "banner",
    urlAdd: "banner",
    urlGetInfo:"banner",
    urlDelete:"banner?banner_id="
}