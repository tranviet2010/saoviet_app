import { convertStatus } from "../../../utils/convertData";

export const ColumParterClass = [
    // { title: 'STT', width: 150, dataIndex: 'autoid', key: 'stt', active: false, align: 'center' },
    { title: 'Tên lớp', dataIndex: 'name', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Tên trường', dataIndex: 'nameSchool', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Mô tả', dataIndex: 'description', key: 'status', width: 250, active: false, align: 'center' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'pictureSmall', width: 250, active: false, align: 'center', render: (item: string) => convertStatus(item) },
    { title: 'Số lượng HS', dataIndex: 'numsOfStudent', key: 'price', width: 250, active: false, align: 'center' }
]


