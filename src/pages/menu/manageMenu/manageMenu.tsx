import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Col, Form, Modal, Table } from "antd"
import dayjs from "dayjs"
import { paginationShared } from "../../../components/core/variable/variable"
import { getManageMenu } from "../../../api/menu.api"
import { deleteFormRequest } from "../../../api/request"
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Notifi from "../../../components/core/noti"
import FormSearch from "../../../components/core/search/formSearch"
import BaseFormInput from "../../../components/core/input/formInput"
import { convertImages, convertStatus, formatCurrency } from "../../../utils/convertData"
import { useNavigate } from "react-router-dom"
import store from "../../../stores"
import { setModalFalse, setModalTrue } from "../../../stores/global.store"


export default function ManageMenu() {
    const [data, setData] = useState<any>([])
    const [dataDetail, setDataDetail] = useState<any>([])
    const [pagination, setPagination] = useState(paginationShared)
    const dataModal = useSelector((state: any) => state.global.dataModal)
    const statusModal = useSelector((state: any) => state.global.statusModal)
    const [valueSearch, setValueSearch] = useState<any>()
    const [editingKey, setEditingKey] = useState([])
    const [loading, setLoading] = useState(false)
    const { confirm } = Modal
    const navigate = useNavigate()
    const [form] = Form.useForm()

    const fetchData = useCallback((pagination: any, params: any) => {
        const combinedParams = {
            ...pagination,
            ...params,
            // order_type: true,
            order_field: "Id",
            applyDate: params?.from_date && params?.to_date ?
                `osbetween:${dayjs(new Date(params?.from_date)).format('DD-MM-YYYY')},${dayjs(new Date(params?.to_date)).format('DD-MM-YYYY')}` : "",
            from_date: "",
            to_date: ""
            // limit: 1000
        }
        console.log("combinedParams", combinedParams);
        getManageMenu(combinedParams).then((ress: any) => {
            setData(ress?.data?.data?.filter((val: any) => val.rootId == undefined)?.map((val: any) => ({ ...val, key: val?.id })))
            setDataDetail(ress?.data?.data?.filter((val: any) => val.rootId != undefined)?.map((val: any) => ({ ...val, key: val?.id })))
            // setData(dataTest)
            setEditingKey(ress?.data?.data?.filter((val: any) => val.rootId != undefined))
            setPagination({ ...pagination, total: ress?.data?.totalCount })
        })
    }, [])

    const onSearch = (value: any) => {
        setValueSearch(value)
        fetchData(pagination, value)
    }
    console.log("data", data);
    const expandedRowRender = () => {
        const columns: any = [
            { title: 'Tên thực đơn', dataIndex: 'name', key: 'type', width: 250, active: false, align: 'center' },
            { title: 'Trạng thái', dataIndex: 'status', key: 'status', width: 250, active: false, align: 'center', render: (item: string) => convertStatus(item) },
            { title: 'Trường áp dụng', dataIndex: 'partnerName', key: 'menu1', width: 250, active: false, align: 'center' },
            // { title: 'Thực đơn ()', dataIndex: 'menu2', key: 'menu2', width: 250, active: false, align: 'center' },
            { title: 'Giá', dataIndex: 'price', key: 'price', width: 250, active: false, align: 'center', render: (item: any) => formatCurrency(item) },
            { title: 'Ảnh nhỏ', dataIndex: 'largeImage', key: 'pictureSmall', width: 250, active: false, align: 'center', render: (item: any) => convertImages(item) },
            { title: 'Ảnh lớn', dataIndex: 'smallImage', key: 'pictureBig', width: 250, active: false, align: 'center', render: (item: any) => convertImages(item) },
            { title: 'Ngày tạo', dataIndex: 'createdAt', key: 'create_date', width: 250, active: false, align: 'center', render: (item: any) => dayjs.unix(item).format('DD/MM/YYYY') },
            { title: 'Ngày áp dụng', dataIndex: 'applyDate', key: 'date_apply', width: 250, active: false, align: 'center', render: (item: any) => dayjs.unix(item).format('DD/MM/YYYY') },
            {
                title: 'Hành động',
                width: 150,
                render: (item: any) => {
                    return (
                        <>
                            <span
                                onClick={() => deleteManyId(item?.id || item?.autoid)}
                                style={{ marginLeft: '1.5rem', cursor: 'pointer' }}
                                title="Xóa"
                            >
                                <DeleteOutlined />
                            </span>
                            <span
                                onClick={() =>
                                    navigate('edit', {
                                        state: {
                                            data: item,
                                            type: 'edit',
                                        },
                                    })
                                }
                                style={{ marginLeft: '1.5rem', cursor: 'pointer' }}
                                title="Sửa"
                            >
                                <EditOutlined />
                            </span>
                        </>
                    )
                }
            },
            Table.EXPAND_COLUMN,
        ]

        return (
            <Table
                columns={columns}
                dataSource={dataDetail}
                pagination={false}
            />
        )
    };

    // const handleExpand = (expanded: any, record: any) => {
    //     const dataChildrent = record?.children.map((val: any) => ({ ...val, key: val?.parentId }))
    //     setDataDetail(dataChildrent)
    // };
    useEffect(() => {
        fetchData(paginationShared, valueSearch)
    }, [dataModal, statusModal, loading])

    const deleteManyId = (e: any) => {
        store.dispatch(setModalTrue());
        confirm({
            title: 'Cảnh báo',
            content: `Bạn có muốn xóa bản ghi này`,
            async onOk() {
                try {
                    let url = 'http://14.225.255.77:8088/e/admin/menu?menu_id=' + e;
                    deleteFormRequest(url, {}).then((res: any) => {
                        if (res?.status == 200) {
                            Notifi('succ', `Xóa thành công bản ghi`);
                            store.dispatch(setModalFalse());
                        }
                        else {

                        }
                    });
                } catch (e) {
                    return console.log('Oops errors!');
                }
            },
            onCancel() {
                store.dispatch(setModalFalse());
            },
        })
    }
    const ColumManageMenuTest: any = [
        { title: 'Tên thực đơn', dataIndex: 'name', key: 'type', width: 250, active: false, align: 'center' },
        { title: 'Trạng thái', dataIndex: 'status', key: 'status', width: 250, active: false, align: 'center', render: (item: string) => convertStatus(item) },
        { title: 'Trường áp dụng', dataIndex: 'partnerName', key: 'menu1', width: 250, active: false, align: 'center' },
        { title: 'Giá', dataIndex: 'price', key: 'price', width: 250, active: false, align: 'center', render: (item: any) => formatCurrency(item) },
        { title: 'Ảnh nhỏ', dataIndex: 'largeImage', key: 'pictureSmall', width: 250, active: false, align: 'center', render: (item: any) => convertImages(item) },
        { title: 'Ảnh lớn', dataIndex: 'smallImage', key: 'pictureBig', width: 250, active: false, align: 'center', render: (item: any) => convertImages(item) },
        { title: 'Ngày tạo', dataIndex: 'createdAt', key: 'create_date', width: 150, active: false, align: 'center', render: (item: any) => dayjs.unix(item).format('DD/MM/YYYY') },
        { title: 'Ngày áp dụng', dataIndex: 'applyDate', key: 'date_apply', width: 250, active: false, align: 'center', render: (item: any) => dayjs.unix(item).format('DD/MM/YYYY') },
        {
            title: 'Hành động',
            width: 150,
            render: (item: any) => {
                return (
                    <>
                        <span
                            onClick={() => deleteManyId(item?.id || item?.autoid)}
                            style={{ marginLeft: '1.5rem', cursor: 'pointer' }}
                            title="Xóa"
                        >
                            <DeleteOutlined />
                        </span>
                        <span
                            onClick={() =>
                                navigate('edit', {
                                    state: {
                                        data: item,
                                        type: 'edit',
                                    },
                                })
                            }
                            style={{ marginLeft: '1.5rem', cursor: 'pointer' }}
                            title="Sửa"
                        >
                            <EditOutlined />
                        </span>
                    </>
                )
            }
        },

    ]

    const handleExpand = (expanded: any, record: any) => {
        console.log("expanded", expanded);
        console.log("expanded", record);
        console.log("expanded", editingKey);
        const dataSet = editingKey.filter((val: any) => val.rootId == record.id)?.map((val: any) => ({ ...val, key: val?.id }))
        setDataDetail(dataSet)
    };
    return (
        <>
            <FormSearch
                onSearch={onSearch}
            // notadd
            >
                <Col span={4}>
                    <BaseFormInput
                        type="option"
                        name="partnerId"
                        typeParam="school"
                        placeholder="Chọn trường"

                    />
                </Col>
                <Col span={4}>
                    <BaseFormInput
                        type="option"
                        name="title"
                        placeholder="Trạng thái"

                    />
                </Col>
            </FormSearch>

            <Table
                columns={ColumManageMenuTest}
                // expandedRowRender={expandedRowRender}
                expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
                // onExpand={handleExpand}
                dataSource={data}
                bordered
                style={{ marginTop: "2rem" }}

            />
        </>
    )
}