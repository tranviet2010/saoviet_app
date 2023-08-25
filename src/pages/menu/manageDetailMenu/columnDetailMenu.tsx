import { convertStatus } from "../../../utils/convertData";

export const ColumDetailManageMenu = [
    // { title: 'STT', width: 150, dataIndex: 'autoid', key: 'stt', active: false, align: 'center' },
    { title: 'Tên thực đơn', dataIndex: 'name', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'status', width: 250, active: false, align: 'center',render: (item: string) => convertStatus(item) },
    { title: 'Món ăn', dataIndex: 'menu1', key: 'menu1', width: 250, active: false, align: 'center' },
    { title: 'Thứ tự', dataIndex: 'menu1', key: 'menu1', width: 250, active: false, align: 'center' }
]
