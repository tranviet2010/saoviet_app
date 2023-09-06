import { Modal, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UndoOutlined, EditOutlined, DeleteOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { deleteServiceInfo } from '@/api/layout.api';
import { useSelector } from 'react-redux';
import store from '../../../stores';
import { setDataModal, setModalFalse, setModalTrue } from '../../../stores/global.store';
import { ButtonCore, PaddingDiv } from '../button/buttonCore';
import { deleteFormRequest } from '../../../api/request';
import Notifi from '../noti';

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
    user
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
                                <span
                                    onClick={() => { }}

                                    title="Khóa"
                                >
                                    <LockOutlined />
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

                                    title="Sửa"
                                >
                                    <EditOutlined />
                                </span>

                                <span
                                    onClick={() => { }}

                                    title="Đổi loại"
                                >
                                    <UndoOutlined />
                                </span>
                            </div> :

                            <>
                                {
                                    deltail ?
                                        <a
                                            onClick={() => deltail(item?.orderDate)}
                                            style={{ cursor: 'pointer', textDecoration: 'underline' }}
                                            title="Thông tin"
                                        >
                                            Chi tiết
                                        </a> :
                                        <>
                                            <span
                                                onClick={() => deleteManyId(item?.id || item?.autoid)}
                                                style={{ marginRight: '1.5rem', cursor: 'pointer' }}
                                                title="Sửa"
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
                            console.log("res==",res);
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
            <Table
                columns={columnTable}
                bordered
                pagination={pagination}
                dataSource={dataSource}
                scroll={{ y: 800 }}
                loading={loading}
                onChange={handleTableChange}
                locale={{ emptyText: 'Không có dữ liệu hiển thị' }}
                size='middle'
            />
            {/* {dataSource.length != 0 ? `Hiện thị ${pagination?.pageSize} bản ghi trên tổng số ${pagination?.total} ` : ""} */}
        </>
    );
};
