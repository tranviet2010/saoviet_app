import axiosInstance from "./request";

export const getPartnerSchool= (config?: any) => axiosInstance.get('partners', { params: config });

export const getPartnerClass= (config?: any) => axiosInstance.get('subclasss', { params: config });


