import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import ModalCore from "../../components/core/modal/modalCore"
import { BaseTable } from "../../components/core/table/tableCore"
import { paginationShared } from "../../components/core/variable/variable"
import { configBanner, getBanner } from "../../api/banner.api"
import { useSelector } from "react-redux"
import { Col } from "antd"
import BaseFormInput from "../../components/core/input/formInput"
import { ColumnOrder, ColumnOrderDetail } from "./column.order"
import { getOrder, getOrderFromDate } from "../../api/order.api"
import store from "../../stores"
import { setModalTrue } from "../../stores/global.store"


export default function Order() {
    const [data, setData] = useState([])
    const [dataDetail, setDataDetail] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const dataModal = useSelector((state: any) => state.global.dataModal);
    const statusModal = useSelector((state: any) => state.global.statusModal)
    const [valueSearch, setValueSearch] = useState<any>()

    const fetchData = useCallback((pagination: any, params: any) => {
        const combinedParams = {
            ...pagination,
            ...params,
            from_date: "01/01/2023",
            to_date: "20/08/2023"
        }
        getOrder(combinedParams).then((ress: any) => {
            const dataConf = ress?.data.map((item: any) => item.lsPartnerOrder).flat()
            setData(dataConf)
            setPagination({ ...pagination, total: ress?.data?.totalCount })
        })
    }, [])

    const onSearch = (value: any) => {
        setValueSearch(value)
        fetchData(pagination, value)
    }
    const clickDetail = (value: any) => {
        store.dispatch(setModalTrue());
        getOrderFromDate({ partner_id: 1, order_date: value }).then((res: any) => {
            setDataDetail(res?.data[0]?.orderRequests)
        })
    }
    const onChangePaniga = (e: any) => {
        setPagination(e)
        fetchData(e, valueSearch)
    }


    useEffect(() => {
        fetchData(paginationShared, valueSearch)
    }, [dataModal, statusModal])
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}
            <ModalCore title="Chi tiết suất ăn" width={1800}>
                <BaseTable
                    columType={ColumnOrderDetail}
                    dataSource={dataDetail}
                    pagination={pagination}
                    onChangePaniga={onChangePaniga}
                    notAction
                />
            </ModalCore>

            <FormSearch
                onSearch={onSearch}
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
            <BaseTable
                columType={ColumnOrder}
                deltail={clickDetail}
                dataSource={data}
                configUrl={configBanner}
                pagination={pagination}
                onChangePaniga={onChangePaniga}
            />
            {/* </BaseFieldset> */}
        </>
    )
}