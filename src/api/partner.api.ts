import axiosInstance from "./request";

export const getPartnerSchool = (config?: any) => axiosInstance.get('partners', { params: config });

export const getPartnerClass = (config?: any) => axiosInstance.get('subclasss', { params: config });


export const configParnerSchool = {
    navigate: "/partner/school",
    // urlInfo: "partner",
    urlEdit: "",
    urlGetInfo: "partner",
    urlDelete: "partner?parner_id="
}

export const configParnerClass = {
    navigate: "/partner/class",
    // urlInfo: "partner",
    urlEdit: "",
    urlGetInfo: "subclass",
    urlDelete: "subclass?sub_calss_id="
}
