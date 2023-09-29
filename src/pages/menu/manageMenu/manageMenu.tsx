// import React, { useCallback, useEffect, useState } from "react"
// import { BaseTable } from "../../../components/core/table/tableCore"
// import { ColumManageMenu } from "./columnManageMenu"
// import FormSearch from "../../../components/core/search/formSearch"
// import { configManageMenu, getManageMenu } from "../../../api/menu.api"
// import { paginationShared } from "../../../components/core/variable/variable"
// import { Col } from "antd"
// import BaseFormInput from "../../../components/core/input/formInput"
// import { useSelector } from "react-redux"

// export default function ManageMenu() {
//     const [data, setData] = useState([])
//     const [valueSearch, setValueSearch] = useState<any>()
//     const [pagination, setPagination] = useState(paginationShared)
//     const dataModal = useSelector((state: any) => state.global.dataModal);
//     const statusModal = useSelector((state: any) => state.global.statusModal)
//     const onSearch = (value: any) => {
//         setValueSearch(value)
//         fetchData(pagination, value)
//     }

//     const fetchData = useCallback((pagination: any, params: any) => {
//         const combinedParams = {
//             ...pagination,
//             ...params,
//             order_field: ""
//         }
//         getManageMenu(combinedParams).then((ress: any) => {
//             setData(ress?.data?.data)
//             setPagination({ ...pagination, total: ress?.data?.totalCount })
//         })
//     }, [])

//     const onChangePaniga = (e: any) => {
//         setPagination(e)
//         fetchData(e, valueSearch)
//     }
//     useEffect(() => {
//         fetchData(paginationShared, valueSearch)
//     }, [dataModal, statusModal])
//     return (
//         <>
//             {/* <BaseFieldset title="Quản lý thực đơn"> */}

//             <FormSearch
//                 onSearch={onSearch}
//             >
//                 <Col span={4}>
//                     <BaseFormInput type="input" placeholder="Nhập tên thực đơn" name="name" />
//                 </Col>
//                 <Col span={4}>
//                     <BaseFormInput type="option" placeholder="Chọn theo trường" typeParam="school" name="partnerId" />
//                 </Col>
//                 <Col span={4}>
//                     <BaseFormInput getId type="option" name="status" placeholder="Trạng thái" typeParam="status" />
//                 </Col>
//             </FormSearch>
//             <BaseTable
//                 columType={ColumManageMenu}
//                 dataSource={data}
//                 pagination={pagination}
//                 onChangePaniga={onChangePaniga}
//                 configUrl={configManageMenu}
//             />
//             {/* </BaseFieldset> */}
//         </>
//     )
// }



import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Badge, Col, Dropdown, Form, Input, InputNumber, Popconfirm, Space, Table, Typography } from "antd"
import {
    DownOutlined
}
    from '@ant-design/icons'
import dayjs from "dayjs"
import { paginationShared } from "../../../components/core/variable/variable"
import { getManageMenu } from "../../../api/menu.api"
import { editComment } from "../../../api/comment.api"
import { deleteFormRequest } from "../../../api/request"
import Notifi from "../../../components/core/noti"
import FormSearch from "../../../components/core/search/formSearch"
import BaseFormInput from "../../../components/core/input/formInput"
import { ColumnComment } from "../../comment/column.comment"
import { ColumManageMenu } from "./columnManageMenu"
import { convertImages, convertStatus, formatCurrency } from "../../../utils/convertData"

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: any;
    index: number;
    children: React.ReactNode;
}
interface DataItem {
    id: number;
    rootid: number;
    children?: DataItem[];
}

export default function ManageMenu() {
    const [data, setData] = useState([])
    const [dataChildren, setDataChildre] = useState([])
    const [dataDetail, setDataDetail] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const dataModal = useSelector((state: any) => state.global.dataModal);
    const statusModal = useSelector((state: any) => state.global.statusModal)
    const [valueSearch, setValueSearch] = useState<any>()
    const [editingKey, setEditingKey] = useState('');
    const [loading, setLoading] = useState(false);

    const [form] = Form.useForm();

    const fetchData = useCallback((pagination: any, params: any) => {
        const combinedParams = {
            ...pagination,
            ...params,
            order_field: "",
            limit: 1000
        }
        getManageMenu(combinedParams).then((ress: any) => {

            function groupByRootId(data: DataItem[]): DataItem[] {
                const grouped: { [key: number]: DataItem } = {};

                data.forEach(item => {
                    const parentId = item.rootid;

                    if (!grouped[parentId]) {
                        grouped[parentId] = { children: [], id: parentId };
                    }

                    const newItem: DataItem = { ...item, children: grouped[item.id]?.children || [] };
                    grouped[parentId].children.push(newItem);
                });

                return Object.values(grouped);
            }

            const result: DataItem[] = groupByRootId(dataArray);




            const notRootId = ress?.data?.data?.filter((val: any) => val.rootId == undefined).map((val: any) => ({ ...val, key: val?.id }))
            const rootId = ress?.data?.data?.filter((val: any) => val.rootId != undefined).map((val: any) => ({ ...val, key: val?.rootId }))
            setData(notRootId)
            setDataChildre(rootId)
            setPagination({ ...pagination, total: ress?.data?.totalCount })
        })
    }, [])

    const onSearch = (value: any) => {
        setValueSearch(value)
        fetchData(pagination, value)
    }
    const onChangePaniga = (e: any) => {
        setPagination(e)
        fetchData(e, valueSearch)
    }
    const expandedRowRender = () => {
        const EditableCell: React.FC<EditableCellProps> = ({
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            children,
            ...restProps
        }) => {
            const inputNode = inputType === 'number' ? <Input disabled /> : <Input />;
            return (
                <td {...restProps}>
                    {editing ? (
                        <Form.Item
                            name={dataIndex}
                            style={{ margin: 0 }}
                            rules={[
                                {
                                    required: false,
                                    message: `Please Input ${title}!`,
                                },
                            ]}
                        >
                            {inputNode}
                        </Form.Item>
                    ) : (
                        children
                    )}
                </td>
            );
        };
        const save = async (key: React.Key) => {

            try {
                const row: any = (await form.validateFields());
                const newData: any = [...dataDetail];
                const index = newData.filter((item: any) => key === item.id)[0];
                const configEdit = {
                    ...index,
                    content: row?.content
                }
                editComment(configEdit).then((res) => {
                    console.log("res==", res);
                })


                // console.log("newData", newData);


            } catch (errInfo) {
                console.log('Validate Failed:', errInfo);
            }
        }

        const cancel = () => {
            setEditingKey('');
        };
        const deleteComment = (e: any) => {
            setLoading(true)
            const urlDetele = `comment?comment_id=${e?.id}`
            deleteFormRequest(urlDetele, {}).then((res) => {
                Notifi('succ', `Xóa thành công comment`);
                setLoading(false)
            })
        }

        const columns: any = [
            { title: 'Tên thực đơn', dataIndex: 'name', key: 'type', width: 250, active: false, align: 'center' },
            { title: 'Trạng thái', dataIndex: 'status', key: 'status', width: 250, active: false, align: 'center', render: (item: string) => convertStatus(item) },
            { title: 'Trường áp dụng', dataIndex: 'partnerName', key: 'menu1', width: 250, active: false, align: 'center' },
            // { title: 'Thực đơn ()', dataIndex: 'menu2', key: 'menu2', width: 250, active: false, align: 'center' },
            { title: 'Giá', dataIndex: 'price', key: 'price', width: 250, active: false, align: 'center', render: (item: any) => formatCurrency(item) },
            { title: 'Ảnh nhỏ', dataIndex: 'largeImage', key: 'pictureSmall', width: 250, active: false, align: 'center', render: (item: any) => convertImages(item) },
            { title: 'Ảnh lớn', dataIndex: 'smallImage', key: 'pictureBig', width: 250, active: false, align: 'center', render: (item: any) => convertImages(item) },
            { title: 'Ngày tạo', dataIndex: 'createdAt', key: 'create_date', width: 250, active: false, align: 'center', render: (item: any) => dayjs(item).format('DD/MM/YYYY') },
            { title: 'Ngày áp dụng', dataIndex: 'applyDate', key: 'date_apply', width: 250, active: false, align: 'center', render: (item: any) => dayjs(item).format('DD/MM/YYYY') },
            {
                title: 'Hành động',
                dataIndex: 'operation',
                render: (_: any, record: any) => {
                    const editable = isEditing(record);
                    return !editable ? (
                        <Space size="middle">
                            <a onClick={() => edit(record)}>Sửa</a>
                            <a onClick={() => deleteComment(record)}>Xóa</a>
                        </Space>
                    ) : (
                        <span>
                            <Typography.Link onClick={() => save(record?.id)} style={{ marginRight: 8 }}>
                                Lưu
                            </Typography.Link>
                            <Popconfirm title="Bạn có muốn hủy thay đổi ?" onConfirm={cancel}>
                                <a>Hủy</a>
                            </Popconfirm>
                        </span>
                    )
                }
            },
            Table.EXPAND_COLUMN,
        ]
        const edit = (record: any) => {
            form.setFieldsValue({ ...record });
            setEditingKey(record.id);
        };
        const isEditing = (record: any) => record.id === editingKey;
        const mergedColumns = columns.map((col: any) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: (record: any) => ({
                    record,
                    inputType: col.dataIndex === 'createAt' ? 'number' : 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: isEditing(record),
                }),
            };
        });
        return (
            <Form form={form} component={false}>
                <Table
                    columns={mergedColumns}
                    dataSource={dataDetail}
                    // rowSelection={{}}
                    // expandable={{
                    //     expandedRowRender: (record) => <p style={{ margin: 0 }}>ajkdsfhjkasdhfjkhasdjkfh</p>,
                    // }}
                    pagination={false}
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                />
            </Form>
        )
    };

    const handleExpand = (expanded: any, record: any) => {
        setDataDetail(record?.children)
    };
    console.log("ColumManageMenu", ColumManageMenu);
    console.log("data", data);
    useEffect(() => {
        fetchData(paginationShared, valueSearch)
    }, [dataModal, statusModal, loading])
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}
            <FormSearch
                onSearch={onSearch}
                notadd
            >
                <Col span={4}>
                    <BaseFormInput
                        type="option"
                        name="type"
                        typeParam="BANNER"
                        placeholder="Đối tác"

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
                columns={ColumManageMenu}
                expandedRowRender={expandedRowRender}
                onExpand={handleExpand}
                dataSource={data}
                bordered
                style={{ marginTop: "2rem" }}
            />
            {/* </BaseFieldset> */}
        </>
    )
}