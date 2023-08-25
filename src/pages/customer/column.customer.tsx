import { getConvertUnix } from "../../utils/convertData";

export const ColumnCustomer=[
    { title: 'Tên', dataIndex: 'name', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Ngày sinh', dataIndex: 'birth_day', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Email', dataIndex: 'email', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Số điện thoại', dataIndex: 'mobile', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Địa chỉ', dataIndex: 'address', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Giới tính', dataIndex: 'sex', key: 'type', width: 250, active: false, align: 'center',render: (item: any) => item == "MALE" ? 'Nam' : 'Nữ' },
    { title: 'Ngày tạo', dataIndex: 'createdAt', key: 'type', width: 250, active: false, align: 'center',render: (item: any) => getConvertUnix(item) },
    { title: 'Ngày kích hoạt', dataIndex: 'activedAt', key: 'type', width: 250, active: false, align: 'center',render: (item: any) => getConvertUnix(item) },
]