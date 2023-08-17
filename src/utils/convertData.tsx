export const LocalStorage = (name: string) => localStorage.getItem(name);


export const convertStatus = (status: string | number) => {
    return status == 1 ? 'Hoạt động' : "Tạm đóng"
}
export const convertImages = (image: string) => {
    return (
        <img src={(image) || 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'} width={50} height={40} />
    )
}