import { Modal, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { deleteServiceInfo } from '@/api/layout.api';
import { useSelector } from 'react-redux';
import Notifi from '../noti';
import store from '../../../stores';
import { setModalFalse, setModalTrue } from '../../../stores/global.store';
import { ButtonCore, PaddingDiv } from '../button/buttonCore';

export interface Pagination {
    current?: number | string
    pageSize?: number | string
    total?: number | string
    page?: number | string
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
}
// todo handler edit and navigate
export const BaseTable = ({
    columType,
    dataSource,
    typeservice,
    name,
    scrollX,
    urlDelete,
    urlEdit,
    urlInfo,
    pagination,
    onChangePaniga
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
            width: 100,
            render: (item) => (
                <>

                    {urlInfo ? <span
                        onClick={() =>
                            navigate(urlInfo || 'info', {
                                state: {
                                    data: item,
                                    type: 'info',
                                    name
                                },
                            })
                        }
                        style={{ cursor: 'pointer' }}
                        title="Thông tin"
                    >
                        <InfoCircleOutlined />
                    </span> : <></>}

                    <span
                        onClick={() =>
                            navigate(urlEdit || 'edit', {
                                state: {
                                    data: item,
                                    type: 'edit',
                                    name,
                                    typeservice,
                                },
                            })
                        }
                        style={{ marginLeft: urlInfo ? '1.5rem' : 0, cursor: 'pointer' }}
                        title="Sửa"
                    >
                        <EditOutlined />
                    </span>
                </>
            ),
        },
    ];

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const deleteManyId = () => {
        store.dispatch(setModalTrue());
        confirm({
            title: 'Cảnh báo',
            content: `Bạn có muốn xóa ${selectedRowKeys?.length} bản ghi`,
            async onOk() {
                try {
                    let url = urlDelete;
                    // deleteServiceInfo({ ids: selectedRowKeys }, url).then((res: any) => {
                    //     if (res?.code == 200) {
                    //         Notifi('succ', `Xóa thành công ${selectedRowKeys?.length} bản ghi`);
                    //         store.dispatch(setModalFalse());
                    //         setSelectedRowKeys([]);
                    //     }
                    //     else {

                    //     }
                    // });
                } catch (e) {
                    return console.log('Oops errors!');
                }
            },
            onCancel() {
                store.dispatch(setModalFalse());
            },
        });
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const handleTableChange = (pagination: any) => {
        onChangePaniga({
            page: pagination?.current,
            limit: pagination?.pageSize,
            total: pagination?.total
        })
    };

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
                columns={columType && [...columType, ...columnsFix]}
                bordered
                pagination={pagination}
                dataSource={dataSource}
                scroll={{ y: 800 }}
                rowSelection={rowSelection}
                loading={loading}
                onChange={handleTableChange}
            // locale={{ emptyText: 'Không có dữ liệu hiển thị' }}
            />
            {/* {dataSource.length != 0 ? `Hiện thị ${pagination?.pageSize} bản ghi trên tổng số ${pagination?.total} ` : ""} */}
        </>
    );
};
