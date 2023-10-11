import { convertImages, convertStatus, formatCurrency, getConvertUnix } from "../../utils/convertData";


export const ColumnRegisClass = (data: any) => {
    console.log("data", data);
    return (
        [
            { title: 'Tên trường', dataIndex: 'partner', key: 'type', width: 250, active: false, align: 'center', render: (item: any) => item?.name },
            { title: 'Lớp', dataIndex: 'subClassId', key: 'status', width: 250, active: false, align: 'center', render: (item: any) => data?.class?.filter((val: any) => val.autoid == item)[0]?.name },
            {
                title: 'Quyền', dataIndex: 'role', key: 'pictureSmall', width: 250, active: false, align: 'center',
                render: (item: any) => data?.CUSTOMER?.filter((val: any) => val.name == item)[0]?.value
            },
            { title: 'Họ và tên', dataIndex: 'custName', key: 'pictureBig', width: 250, active: false, align: 'center' },
            { title: 'Số điện thoại', dataIndex: 'custMobile', key: 'menu1', width: 250, active: false, align: 'center' },
            // { title: 'Thời gian gửi', dataIndex: 'orderDate', key: 'menu2', width: 250, active: false, align: 'center' },
            { title: 'Email', dataIndex: '', key: 'menu2', width: 250, active: false, align: 'center' },
            { title: 'Thời gian tạo', dataIndex: 'createdAt', key: 'menu2', width: 250, active: false, align: 'center', render: (item: any) => getConvertUnix(item) },
            { title: 'Trạng thái', dataIndex: 'status', key: 'pictureSmall', width: 250, active: false, align: 'center', render: (item: string) => convertStatus(item) }

        ]
    )
} 