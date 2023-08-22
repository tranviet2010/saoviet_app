import axiosInstance from "./request";

export const getPartner = async () => {
    try {
        const response = await axiosInstance.get('partners');
        return response.data
    }
    catch (error) {
        throw error;
    }
};