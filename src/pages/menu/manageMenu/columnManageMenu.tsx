
export const ColumManageMenu = [
    { title: 'STT', width: 150, dataIndex: 'stt', key: 'stt', active: false, align: 'center' },
    { title: 'Tên thực đơn', dataIndex: 'name', key: 'type', width: 250, active: false, align: 'center' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'status', width: 250, active: false, align: 'center' },
    { title: 'Thực đơn ()', dataIndex: 'menu1', key: 'menu1', width: 250, active: false, align: 'center' },
    { title: 'Thực đơn ()', dataIndex: 'menu2', key: 'menu2', width: 250, active: false, align: 'center', render: (item: string) => item == "ACTIVE" ? "Hoạt động" : "Không hoạt động" },
    { title: 'Giá', dataIndex: 'much', key: 'much', width: 250, active: false, align: 'center' },
    { title: 'Ảnh nhỏ', dataIndex: 'pictureSmall', key: 'pictureSmall', width: 250, active: false, align: 'center' },
    { title: 'Ảnh lớn', dataIndex: 'pictureBig', key: 'pictureBig', width: 250, active: false, align: 'center' },
    { title: 'Ngày tạo', dataIndex: 'create_date', key: 'create_date', width: 250, active: false, align: 'center' },
    { title: 'Ngày áp dụng', dataIndex: 'date_apply', key: 'date_apply', width: 250, active: false, align: 'center' },
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
