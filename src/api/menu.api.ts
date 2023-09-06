import axiosInstance from "./request"
export const getManageMenu = (config?: any) => axiosInstance.get('menus', { params: config });

export const getManageMenuDetail = (config?: any) => axiosInstance.get('menu-details', { params: config });

export const configManageMenu = {
    navigate: "/menu/manageMenu",
    urlInfo: "",
    urlEdit: "menu",
    urlAdd: "menu",
    urlGetInfo: "menu",
    urlDelete: "menu?menu_id=",
}

export const configDetailMenu = {
    navigate: "/menu/manageDetailMenu",
    urlInfo: "",
    urlEdit: "menu-detail",
    urlAdd: "menu-detail",
    urlGetInfo: "menu-details",
    urlDelete: "menu-detail?menu-detail-id=",
}

