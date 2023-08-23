export const LocalStorage = (name: string) => localStorage.getItem(name);


export const convertStatus = (status: string | number) => {
    return status == 1 ? 'Hoạt động' : "Tạm đóng"
}
export const convertImages = (image: string) => {
    return (
        <img src={(image) || 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'} width={50} height={40} />
    )
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