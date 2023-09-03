import { convertImages, convertStatus, formatCurrency } from "../../utils/convertData";

export const ColumnOrderProduct = [
    { title: 'Tên món', dataIndex: 'name', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Đơn vị tính', dataIndex: 'unit', key: 'status', width: 250, active: false, align: 'center' },
    { title: 'Ảnh nhỏ', dataIndex: 'largeImage', key: 'pictureSmall', width: 250, active: false, align: 'center', render: (item: any) => convertImages(item) },
    { title: 'Ảnh lớn', dataIndex: 'smallImage', key: 'pictureBig', width: 250, active: false, align: 'center', render: (item: any) => convertImages(item) },
    { title: 'Dinh dưỡng', dataIndex: 'kcalo', key: 'menu1', width: 250, active: false, align: 'center' },
    // { title: 'Thời gian gửi', dataIndex: 'orderDate', key: 'menu2', width: 250, active: false, align: 'center' },
    { title: 'Số lượng', dataIndex: 'quantity', key: 'menu2', width: 250, active: false, align: 'center' },
    { title: 'Đơn giá', dataIndex: 'price', key: 'menu2', width: 250, active: false, align: 'center',render: (item: any) => formatCurrency(item) },
    { title: 'Trạng thái', dataIndex: 'status', key: 'pictureSmall', width: 250, active: false, align: 'center', render: (item: string) => convertStatus(item) }

]