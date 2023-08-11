// import type { AxiosRequestConfig, Method } from 'axios';

// import { message as $message } from 'antd';
// import axios from 'axios';

// import store from '@/stores';
// import { setGlobalState } from '@/stores/global.store';
// import { LocalStorage } from '@/utils/convertdata';

// // export const baseUrlApi = 'http://localhost:3003/api/v1';
// export const baseUrlApi = 'http://172.105.236.195/api/v1';

// const axiosInstance = axios.create({
//     timeout: 6000,
// })

// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = LocalStorage('token')?.slice(1, -1);
//         store.dispatch(
//             setGlobalState({
//                 loading: true,
//             }),
//         );
//         if (!config.headers) {
//             config.headers = {};
//         }
//         config.headers['Authorization'] = `Bearer ${token}`;
//         return config;
//     },
//     (error) => {
//         store.dispatch(
//             setGlobalState({
//                 loading: false,
//             }),
//         );
//         Promise.reject(error);
//     },
// )

// axiosInstance.interceptors.response.use(
//     (config) => {
//         const token = LocalStorage('token')?.slice(1, -1);
//         store.dispatch(
//             setGlobalState({
//                 loading: false,
//             }),
//         );
//         if (config?.data?.message) {
//             // $message.success(config.data.message)
//         }
//         config.headers['Authorization'] = `Bearer ${token}`;
//         return config?.data;
//     },
//     (error) => {
//         store.dispatch(
//             setGlobalState({
//                 loading: false,
//             }),
//         );
//         // if needs to navigate to login page when request exception
//         // history.replace('/login');
//         let errorMessage = 'Lỗi hệ thống';

//         if (error?.message?.includes('Network Error')) {
//             errorMessage = 'Lỗi mạng, vui lòng thử lại';
//         } else {
//             errorMessage;
//         }

//         // console.dir(error);
//         error.message && $message.error(errorMessage);

//         return {
//             status: false,
//             message: errorMessage,
//             result: null,
//         };
//     },
// );

// export type Response<T = any> = {
//     type: any;
//     data: any;
//     status: boolean;
//     message: string;
//     result: T;
// };

// export type MyResponse<T = any> = Promise<Response<T>>;
// /**
//  *
//  * @param method - request methods
//  * @param url - request url
//  * @param data - request data or params
//  */




// export const request = <T = any>(method: Lowercase<Method>, url: string, data?: any, config?: AxiosRequestConfig): MyResponse<T> => {
//     // const prefix = ''

//     url = baseUrlApi + url;
//     if (method === 'post') {
//         return axiosInstance.post(url, data, config);
//     }
//     if (method === 'get') {
//         return axiosInstance.get(url, {
//             params: data,
//             ...config,
//         });
//     }
//     if (method == 'patch') {
//         return axiosInstance.patch(url, data);
//     } else {
//         return axiosInstance.delete(url, data);
//     }
// };
