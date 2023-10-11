import axiosInstance from "./request";

export const getCpms = (config?: any) => axiosInstance.get('cpms', { params: config });


export const configRegisClass = {
    navigate: "/regisclass",
    // urlInfo: "partner",
    urlEdit: "partner",
    urlGetInfo: "partner",
    urlAdd: "cpm",
    urlDelete: "partner?parner_id="
}