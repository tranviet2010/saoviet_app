import { convertImages, convertStatus, getConvertUnix } from "../../utils/convertData";

export const ColumnComment: any = [
    // { title: 'STT', width: 150, dataIndex: 'autoid', key: 'stt', active: false, align: 'center' },
    { title: 'Người nhận xét', dataIndex: 'name', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Đối tượng', dataIndex: 'objectCode', key: 'status', width: 250, active: false, align: 'center' },
    { title: 'Đối tượng liên quan', dataIndex: 'quantity', key: 'menu1', width: 250, active: false, align: 'center' },
    { title: 'Nội dung', dataIndex: 'content', key: 'menu2', width: 250, active: false, align: 'center' },
    { title: 'Tiêu đề', dataIndex: 'title', key: 'pictureSmall', width: 250, active: false, align: 'center' },
    { title: 'Trạng thái', dataIndex: 'orderDate', key: 'menu2', width: 250, active: false, align: 'center', render: (item: string) => convertStatus(item) },
    { title: 'Phản hồi gốc', dataIndex: 'orderDate', key: 'menu2', width: 250, active: false, align: 'center' }

]
