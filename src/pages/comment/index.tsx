import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import { paginationShared } from "../../components/core/variable/variable"
import { useSelector } from "react-redux"
import { Badge, Col, Dropdown, Form, Input, InputNumber, Popconfirm, Space, Table, Typography } from "antd"
import BaseFormInput from "../../components/core/input/formInput"
import { ColumnComment } from "./column.comment"
import {
    DownOutlined
}
    from '@ant-design/icons'
import { editComment, getComments } from "../../api/comment.api"
import { getConvertUnix } from "../../utils/convertData"
import { deleteFormRequest } from "../../api/request"
import Notifi from "../../components/core/noti"
import dayjs from "dayjs"

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: any;
    index: number;
    children: React.ReactNode;
}

export default function Comment() {
    const [data, setData] = useState([])
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
            limit: 1000,
            createAt: params?.from_date && params?.to_date ?
                `osbetween:${dayjs(new Date(params?.from_date)).format('DD-MM-YYYY')},${dayjs(new Date(params?.to_date)).format('DD-MM-YYYY')}` : "",
            from_date: "",
            to_date: ""
        }
        getComments(combinedParams).then((ress: any) => {
            let conf = ress?.data?.data.map((val: any) => ({ ...val, key: val?.id }))
            setData(conf)
            setPagination({ ...pagination, total: ress?.data?.totalCount })
        })
    }, [])

    const onSearch = (value: any) => {
        setValueSearch(value)
        fetchData(pagination, value)
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
                })
            } catch (errInfo) {
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
            { title: 'Tên', dataIndex: 'name', key: 'date', editable: true, },
            { title: 'Nội dung', dataIndex: 'content', key: 'name', editable: true, },
            { title: 'Ngày gửi', dataIndex: 'createAt', key: 'upgradeNum', render: (item: any) => dayjs(item).format('DD/MM/YYYY'), editable: true, },
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
                        name="title"
                        placeholder="Trạng thái"

                    />
                </Col>
            </FormSearch>

            <Table
                columns={ColumnComment}
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