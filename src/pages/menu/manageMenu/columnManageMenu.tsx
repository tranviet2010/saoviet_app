import dayjs from "dayjs"
import { convertImages, convertStatus, formatCurrency, getConvertUnix } from "../../../utils/convertData"

export const ColumManageMenu:any = [
    // { title: 'STT', width: 150, dataIndex: 'autoid', key: 'stt', active: false, align: 'center' },
    { title: 'Tên thực đơn', dataIndex: 'name', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'status', width: 250, active: false, align: 'center', render: (item: string) => convertStatus(item) },
    { title: 'Trường áp dụng', dataIndex: 'partnerName', key: 'menu1', width: 250, active: false, align: 'center' },
    // { title: 'Thực đơn ()', dataIndex: 'menu2', key: 'menu2', width: 250, active: false, align: 'center' },
    { title: 'Giá', dataIndex: 'price', key: 'price', width: 250, active: false, align: 'center', render: (item: any) => formatCurrency(item) },
    { title: 'Ảnh nhỏ', dataIndex: 'largeImage', key: 'pictureSmall', width: 250, active: false, align: 'center', render: (item: any) => convertImages(item) },
    { title: 'Ảnh lớn', dataIndex: 'smallImage', key: 'pictureBig', width: 250, active: false, align: 'center', render: (item: any) => convertImages(item) },
    { title: 'Ngày tạo', dataIndex: 'createdAt', key: 'create_date', width: 250, active: false, align: 'center', render: (item: any) => dayjs(item).format('DD/MM/YYYY') },
    { title: 'Ngày áp dụng', dataIndex: 'applyDate', key: 'date_apply', width: 250, active: false, align: 'center', render: (item: any) => dayjs(item).format('DD/MM/YYYY') },
    
]

export const listFilterSupplier = [
    { value: "name", label: "Tên nhà cung cấp", status: true },
    { value: "code", label: "Mã nhà cung cấp", status: true },
    { value: "type", label: "loại sản phẩm dịch vụ", status: false },
    { value: "contract_name", label: "Hợp đồng", status: false },
    { value: "device_name", label: "Thiết bị", status: false },
    { value: "deposit", label: "Tiền cọc", status: false },
    { value: "activation_fee", label: "Phí kích hoạt", status: false },
]

export const ColumManageMenuAddFeild = [
    // { title: 'STT', width: 150, dataIndex: 'stt', key: 'stt', active: false, align: 'center' },
    { title: 'Món ăn', dataIndex: 'name', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Mô tả', dataIndex: 'status', key: 'status', width: 250, active: false, align: 'center' },
    { title: 'Trạng thái', dataIndex: 'menu1', key: 'menu1', width: 250, active: false, align: 'center' },
    { title: 'Ảnh nhỏ', dataIndex: 'menu2', key: 'menu2', width: 250, active: false, align: 'center', render: (item: string) => item == "ACTIVE" ? "Hoạt động" : "Không hoạt động" },
    { title: 'Ảnh to', dataIndex: 'much', key: 'much', width: 250, active: false, align: 'center' },
    { title: 'Đơn vị', dataIndex: 'pictureSmall', key: 'pictureSmall', width: 250, active: false, align: 'center' },
    { title: 'Định lượng sống', dataIndex: 'pictureBig', key: 'pictureBig', width: 250, active: false, align: 'center' },
    { title: 'DL chính', dataIndex: 'create_date', key: 'create_date', width: 250, active: false, align: 'center' },
    { title: 'Lượng KLo', dataIndex: 'date_apply', key: 'date_apply', width: 250, active: false, align: 'center' },
    { title: 'Giá tham khảo', dataIndex: 'date_apply', key: 'date_apply', width: 250, active: false, align: 'center' },
]


