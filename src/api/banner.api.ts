import axiosInstance from "./request"

export const getBaner = () => {
    axiosInstance.get('banners').then((res) => res)
}