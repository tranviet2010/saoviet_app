import { convertImages, convertStatus } from "../../utils/convertData";


export const ColumnBanner = [
    // { title: 'STT', width: 150, dataIndex: 'autoid', key: 'stt', active: false, align: 'center' },
    { title: 'Tiêu đề', dataIndex: 'title', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Kiểu', dataIndex: 'type_name', key: 'status', width: 250, active: false, align: 'center' },
    { title: 'Ảnh lớn', dataIndex: 'smallImage', key: 'menu1', width: 250, active: false, align: 'center', render: (item: string) => convertImages(item) },
    { title: 'Ảnh nhỏ', dataIndex: 'contactAddress', key: 'menu2', width: 250, active: false, align: 'center', render: (item: string) => convertImages(item) },
    { title: 'Trạng thái', dataIndex: 'status', key: 'pictureSmall', width: 250, active: false, align: 'center', render: (item: string) => convertStatus(item) },
    { title: 'Mô tả', dataIndex: 'description', key: 'price', width: 250, active: false, align: 'center' }
]