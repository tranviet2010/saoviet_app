import { convertImages, convertStatus, getConvertUnix } from "../../utils/convertData";

export const ColumnOrder = [
    // { title: 'STT', width: 150, dataIndex: 'autoid', key: 'stt', active: false, align: 'center' },
    { title: 'Ngày', dataIndex: 'orderDate', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Trường', dataIndex: 'partnerName', key: 'status', width: 250, active: false, align: 'center' },
    { title: 'Số lượng', dataIndex: 'quantity', key: 'menu1', width: 250, active: false, align: 'center' },
    { title: 'Thời gian gửi', dataIndex: 'orderDate', key: 'menu2', width: 250, active: false, align: 'center' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'pictureSmall', width: 250, active: false, align: 'center', render: (item: string) => convertStatus(item) }
]


export const ColumnOrderDetail = [
    // { title: 'STT', width: 150, dataIndex: 'autoid', key: 'stt', active: false, align: 'center' },
    { title: 'Ngày', dataIndex: 'orderDate', key: 'type', width: 250, active: false, align: 'center', render: (item: any) => getConvertUnix(item) },
    { title: 'Trường', dataIndex: 'partnerName', key: 'status', width: 250, active: false, align: 'center' },
    { title: 'Lớp', dataIndex: 'className', key: 'status', width: 250, active: false, align: 'center' },
    { title: 'Số lượng', dataIndex: 'quantity', key: 'menu1', width: 250, active: false, align: 'center' },
    { title: 'Người gửi', dataIndex: 'customerName', key: 'menu1', width: 250, active: false, align: 'center' },
    { title: 'Thời gian gửi', dataIndex: 'createdAt', key: 'menu2', width: 250, active: false, align: 'center', render: (item: any) => getConvertUnix(item) },
    { title: 'Trạng thái', dataIndex: 'status', key: 'pictureSmall', width: 250, active: false, align: 'center', render: (item: string) => convertStatus(item) }
]