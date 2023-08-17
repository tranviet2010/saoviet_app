import { convertImages, convertStatus } from "../../utils/convertData";

export const ColumSchool = [
    { title: 'STT', width: 150, dataIndex: 'autoid', key: 'stt', active: false, align: 'center' },
    { title: 'Tên trường', dataIndex: 'name', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Mô tả', dataIndex: 'description', key: 'status', width: 250, active: false, align: 'center' },
    { title: 'Địa chỉ', dataIndex: 'address', key: 'menu1', width: 250, active: false, align: 'center' },
    { title: 'Địa chỉ liên hệ', dataIndex: 'contactAddress', key: 'menu2', width: 250, active: false, align: 'center' },
    { title: 'Số điện thoại', dataIndex: 'mobile', key: 'price', width: 250, active: false, align: 'center' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'pictureSmall', width: 250, active: false, align: 'center', render: (item: string) => convertStatus(item) },
    { title: 'Ảnh', dataIndex: 'avatar', key: 'pictureBig', width: 250, active: false, align: 'center', render: (item: any) => convertImages(item) },
]

export const ColumClass = [
    { title: 'STT', width: 150, dataIndex: 'autoid', key: 'stt', active: false, align: 'center' },
    { title: 'Tên lớp', dataIndex: 'name', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Mô tả', dataIndex: 'description', key: 'status', width: 250, active: false, align: 'center' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'pictureSmall', width: 250, active: false, align: 'center', render: (item: string) => convertStatus(item) },
    { title: 'Số lượng HS', dataIndex: 'numsOfStudent', key: 'price', width: 250, active: false, align: 'center' }
]