import { Col, Form, Modal, Row, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UndoOutlined, EditOutlined, DeleteOutlined, LockOutlined, LockTwoTone, CheckCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { deleteServiceInfo } from '@/api/layout.api';
import { useSelector } from 'react-redux';
import store from '../../../stores';
import { modalFalse, modalTrue, setDataModal, setModalFalse, setModalTrue } from '../../../stores/global.store';
import { ButtonCore, PaddingDiv } from '../button/buttonCore';
import { addFormData, deleteFormRequest } from '../../../api/request';
import Notifi from '../noti';
import { blockCustom, changeCustom } from '../../../api/custom.api';
import ModalCore from '../modal/modalCore';
import BaseFormInput from '../input/formInput';
import './style.css'
import ModalCoreFix from '../modal/modalCoreFix';
import axios from 'axios';

export interface Pagination {
    current?: number | string
    limit?: number | string
    total?: number | string
    page?: number | string
    order_field?: string
    pageSize?: string | any
}
interface BaseTable {
    columType: any;
    dataSource: any;
    isDelete?: boolean;
    typeservice?: boolean;
    name?: string | any;
    scrollX?: string | any;
    urlDelete?: string | any;
    urlEdit?: string | any;
    urlInfo?: string;
    pagination?: Pagination | any
    onChangePaniga?: any
    configUrl?: any
    deltail?: any
    notAction?: boolean
    user?: boolean
    classT?: boolean
}
// todo handler edit and navigate
export const BaseTable = ({
    columType,
    dataSource,
    typeservice,
    scrollX,
    urlInfo,
    pagination,
    onChangePaniga,
    configUrl,
    deltail,
    notAction,
    user,
    classT
}: BaseTable) => {
    const { loading } = useSelector((state: {
        global: {
            loading: boolean,
            loadingData: boolean
        }
    }) => state.global);
    const navigate = useNavigate();
    const { confirm } = Modal;
    const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);
    const dataCustomer = useSelector((state: any) => state.usersSlice.param.CUSTOMER)?.map((val: any) => ({ ...val, autoid: val.name }))
    const [typeC, setTypeC] = useState<any>('');
    const statusModal = useSelector((state: any) => state.global.statusModal);
    const custId = localStorage.getItem('custId');


    const [form] = Form.useForm()

    const columnsFix: ColumnsType<any> = [
        {
            title: 'Hành động',
            key: 'operation',
            align: 'center',
            fixed: 'right',
            width: user ? 120 : 100,
            render: (item) => (
                <>
                    {
                        user ?
                            <div style={{ display: 'flex', justifyContent: 'space-around', cursor: "pointer" }}>
                                {
                                    item.status == "1" ?
                                        <span
                                            onClick={() => blockUser(`customer/block?cust_id=${item?.id}`, "khóa")}

                                            title="Hoạt động"
                                        >
                                            <LockTwoTone />
                                        </span> :
                                        <span
                                            onClick={() => blockUser(`customer/unblock?cust_id=${item?.id}`, "mở khóa")}
                                            title="Khóa"
                                        >
                                            <LockOutlined />
                                        </span>
                                }

                                <span
                                    onClick={() =>
                                        navigate('edit', {
                                            state: {
                                                data: item,
                                                type: 'edit',
                                            },
                                        })
                                    }

                                    title="Sửa"
                                >
                                    <EditOutlined />
                                </span>

                                <span
                                    onClick={() => {
                                        setTypeC(item)
                                        store.dispatch(modalTrue())
                                    }}

                                    title="Đổi loại"
                                >
                                    <UndoOutlined />
                                </span>

                            </div> :
                            classT ? <>
                                <span
                                    onClick={() => acceptRegis(item)}
                                    style={{ marginRight: '1.5rem', cursor: 'pointer' }}
                                    title="Duyệt đăng ký"
                                >
                                    <CheckCircleOutlined />
                                </span>
                                <span
                                    onClick={() => cancelRegis(item)}
                                    style={{ marginLeft: urlInfo ? '1.5rem' : 0, cursor: 'pointer' }}
                                    title="Hủy đăng ký"
                                >
                                    <CloseOutlined />
                                </span>
                            </>
                                : <>
                                    {
                                        deltail ?
                                            <a
                                                onClick={() => deltail(item)}
                                                style={{ cursor: 'pointer', textDecoration: 'underline' }}
                                                title="Thông tin"
                                            >
                                                Chi tiết
                                            </a> :
                                            <>
                                                <span
                                                    onClick={() => deleteManyId(item?.id || item?.autoid)}
                                                    style={{ marginRight: '1.5rem', cursor: 'pointer' }}
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
                                                    style={{ marginLeft: urlInfo ? '1.5rem' : 0, cursor: 'pointer' }}
                                                    title="Sửa"
                                                >
                                                    <EditOutlined />
                                                </span>
                                            </>
                                    }
                                </>
                    }

                </>
            ),
        },
    ]
    const acceptRegis = (data: any) => {
        store.dispatch(setModalTrue());
        let url = 'http://apis.thucphamsaoviet.com/e/cpm/approve'
        const dataRequest = {
            actorId: Number(custId),
            actorRole: localStorage.getItem('role'),
            lsMapId: [data?.autoid]
        }
        confirm({
            title: 'Cảnh báo',
            content: `Bạn có muốn duyệt bản ghi này`,
            async onOk() {
                try {
                    axios.post(url, dataRequest, { headers: { "Authorization": 'Bearer' + ' ' + localStorage.getItem('token') } })
                        .then((res: any) => {
                            Notifi('succ', "Cập nhật thành công")
                        })
                        .catch((err: any) => {
                            Notifi('error', err?.response?.data?.message)
                        })
                } catch (e) {
                }
            },
            onCancel() {
                store.dispatch(setModalFalse());
            },
        });



    }
    const cancelRegis = (data: any) => {
        store.dispatch(setModalTrue());
        let url = 'http://apis.thucphamsaoviet.com/e/cpm'
        const dataRequest = {
            actorId: Number(custId),
            actorRole: localStorage.getItem('role'),
            mapId: [data?.autoid]
        }
        confirm({
            title: 'Cảnh báo',
            content: `Bạn có muốn hủy duyệt bản ghi này`,
            async onOk() {
                try {
                    axios.delete(url, { data: dataRequest, headers: { "Authorization": 'Bearer' + ' ' + localStorage.getItem('token') } })
                        .then((res: any) => {
                            Notifi('succ', "Cập nhật thành công")
                        })
                        .catch((err: any) => {
                            Notifi('error', err?.response?.data?.message)
                        })
                } catch (e) {
                }
            },
            onCancel() {
                store.dispatch(setModalFalse());
            },
        });
    }

    const deleteManyId = (id: any) => {
        store.dispatch(setModalTrue());
        confirm({
            title: 'Cảnh báo',
            content: `Bạn có muốn xóa bản ghi này`,
            async onOk() {
                try {
                    let url = configUrl.urlDelete + id;
                    deleteFormRequest(url, {}).then((res: any) => {
                        if (res?.status == 200) {
                            Notifi('succ', `Xóa thành công bản ghi`);
                            store.dispatch(setModalFalse());
                            setSelectedRowKeys([]);
                        }
                        else {

                        }
                    });
                } catch (e) {
                }
            },
            onCancel() {
                store.dispatch(setModalFalse());
            },
        });
    }

    const blockUser = (url: any, title: string) => {
        store.dispatch(setModalTrue());
        confirm({
            title: 'Cảnh báo',
            content: `Bạn có muốn ${title} bản ghi này`,
            async onOk() {
                try {
                    blockCustom(url).then((res: any) => {
                        if (res?.status == 200) {
                            Notifi('succ', `${title} thành công bản ghi`);
                            store.dispatch(setModalFalse());
                            setSelectedRowKeys([]);
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
        });
    }

    const handleTableChange = (pagination: any) => {
        onChangePaniga({
            page: pagination?.current,
            limit: pagination?.pageSize,
            total: pagination?.total
        })
    }
    const onFinish = (values: any) => {
        let url = `customer/change_type?cust_id=${typeC?.id}&cust_type=${values?.custType}`
        changeCustom(url).then((res) => {
            Notifi('succ', `Thay đổi công bản ghi`);
            store.dispatch(modalFalse())
        })
    }
    useEffect(() => {
        form.setFieldsValue({ custType: typeC?.custType })
    }, [typeC])
    const columnTable = notAction ? [...columType] : [...columType, ...columnsFix]
    return (
        <>
            {selectedRowKeys.length != 0 ? (
                <div style={{ height: '35px', alignItems: 'center' }}>
                    <ButtonCore onClick={deleteManyId}>Xóa</ButtonCore>
                    <span style={{ marginLeft: 8 }}>{`Xóa ${selectedRowKeys.length} bản ghi`}</span>
                    <PaddingDiv />
                </div>
            ) : (
                <div style={{ height: '35px' }}></div>
            )}
            <ModalCoreFix title='Đổi loại khách hàng' modalHeight>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    form={form}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    // initialValues={{ cust_type: typeC }}
                    onFinish={onFinish}
                    autoComplete="off"

                >
                    <Row>
                        <Col span={18}>
                            <BaseFormInput type='option' name='custType' data={dataCustomer} style={{ width: '21rem' }} />
                        </Col>
                        <Col span={6}>
                            <ButtonCore>Thay đổi</ButtonCore>
                        </Col>
                    </Row>

                </Form>
            </ModalCoreFix>
            <Table
                columns={columnTable}
                bordered
                pagination={pagination}
                dataSource={dataSource}
                scroll={{ y: 1000 }}
                loading={loading}
                onChange={handleTableChange}
                locale={{ emptyText: 'Không có dữ liệu hiển thị' }}
                size='middle'
                style={{ height: "500px" }}
            />
            {/* {dataSource.length != 0 ? `Hiện thị ${pagination?.pageSize} bản ghi trên tổng số ${pagination?.total} ` : ""} */}
        </>
    );
};
