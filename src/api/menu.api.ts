import axiosInstance from "./request"


export const getManageMenu = (config?: any) => axiosInstance.get('menus', { params: config });

export const getManageMenuDetail= (config?: any) => axiosInstance.get('menu-details', { params: config });

