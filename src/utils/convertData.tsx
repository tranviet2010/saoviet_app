import dayjs from "dayjs";
import { getManageMenu } from "../api/menu.api";
import store from "../stores";

export const LocalStorage = (name: string) => localStorage.getItem(name);

export const convertStatus = (status: string | number) => {
    return status == 1 ? 'Hoạt động' : "Tạm đóng"
}
export const convertStatusBoole = (status: string | number) => {
    return status == 1 ? true : false
}
export const convertImages = (image: string) => {
    return (
        <img src={(image) || 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'} width={50} height={40} />
    )
}

export const getTimeUnix = (time: any) => {
    //convert dd/mm/yyy to 3665653230065
    return dayjs(time).format('YYYY-MM-DD');
}
export const getConvertUnix = (unixTimestamp: number) => {
    //convert 3665653230065 to dd/mm/yyy
    return dayjs.unix(unixTimestamp).format('DD/MM/YYYY')
}

export function setCookie(name: any, value: any) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (2 * 60 * 60 * 1000)); // Thời gian hết hạn
    const cookieValue = encodeURIComponent(value) + "; expires=" + expires.toUTCString() + "; path=/";
    document.cookie = name + "=" + cookieValue;
}

export function getCookie(name: string) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();

        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }

    return null;
}

export const formatCurrency = (amount: number) => {
    const parts = amount && amount.toString().split('.')
    const integerPart = parts && parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    const decimalPart = parts && parts[1] ? `,${parts[1]}` : ''

    return `${integerPart}${decimalPart}`
}
