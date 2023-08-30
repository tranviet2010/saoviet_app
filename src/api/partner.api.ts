import axiosInstance from "./request";

export const getPartnerSchool = (config?: any) => axiosInstance.get('partners', { params: config });

export const getPartnerClass = (config?: any) => axiosInstance.get('subclasss', { params: config });


export const configParnerSchool = {
    navigate: "/partner/school",
    // urlInfo: "partner",
    urlEdit: "partner",
    urlGetInfo: "partner",
    urlAdd: "partner",
    urlDelete: "partner?parner_id="
}

export const configParnerClass = {
    navigate: "/partner/class",
    // urlInfo: "partner",
    urlEdit: "subclass",
    urlAdd: "subclass",
    urlGetInfo: "subclass",
    urlDelete: "subclass?sub_calss_id="
}
