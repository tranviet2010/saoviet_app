import axiosInstance from "./request";

export const getComments = (config?: any) => axiosInstance.get('comments', { params: config });
export const editComment = (data: any) => axiosInstance.put('comment', data);