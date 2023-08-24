import axiosInstance from "./request"
export const getManageMenu = (config?: any) => axiosInstance.get('menus', { params: config });

export const getManageMenuDetail = (config?: any) => axiosInstance.get('menu-details', { params: config });


export const configManageMenu = {
    navigate:"/menu/manageMenu",
    urlInfo: "",
    urlEdit: "",
    urlGetInfo:"banner",
    urlDelete:"banner?banner_id="
}

