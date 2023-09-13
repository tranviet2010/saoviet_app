import { convertImages, convertStatus, getConvertUnix } from "../../utils/convertData";

export const ColumnCustomer=[
    { title: 'Tên người dùng', dataIndex: 'name', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'type', width: 250, active: false, align: 'center',render: (item: string) => convertStatus(item) },
    { title: 'Ảnh đại diện', dataIndex: 'avatar', key: 'type', width: 250, active: false, align: 'center',render: (item: string) => convertImages(item) },
    { title: 'Giới thiệu', dataIndex: 'introduce', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Email', dataIndex: 'email', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Số điện thoại', dataIndex: 'mobile', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Loại', dataIndex: 'mobile', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Giới tính', dataIndex: 'sex', key: 'type', width: 250, active: false, align: 'center',render: (item: any) => item == "MALE" ? 'Nam' : 'Nữ' },
    { title: 'Ngày tạo', dataIndex: 'createdAt', key: 'type', width: 250, active: false, align: 'center',render: (item: any) => getConvertUnix(item) },
    { title: 'Ngày kích hoạt', dataIndex: 'activedAt', key: 'type', width: 250, active: false, align: 'center',render: (item: any) => getConvertUnix(item) },
]