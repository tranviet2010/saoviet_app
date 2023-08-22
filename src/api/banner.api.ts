import axiosInstance from "./request"


export const getBanner= (config?: any) => axiosInstance.get('banners', { params: config })

