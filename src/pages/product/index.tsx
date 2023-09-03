import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import ModalCore from "../../components/core/modal/modalCore"
import { BaseTable } from "../../components/core/table/tableCore"
import { paginationShared } from "../../components/core/variable/variable"
import { configBanner, getBanner } from "../../api/banner.api"
import { useSelector } from "react-redux"
import { Col } from "antd"
import BaseFormInput from "../../components/core/input/formInput"
import { getOrder, getOrderFromDate } from "../../api/order.api"
import store from "../../stores"
import { setModalTrue } from "../../stores/global.store"
import { ColumnOrderProduct } from "./column.product"
import { configProduct, getProduct } from "../../api/product.api"


export default function Product() {
    const [data, setData] = useState([])
    const [dataDetail, setDataDetail] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const dataModal = useSelector((state: any) => state.global.dataModal);
    const statusModal = useSelector((state: any) => state.global.statusModal)
    const [valueSearch, setValueSearch] = useState<any>()

    const fetchData = useCallback((pagination: any, params: any) => {
        const combinedParams = {
            ...pagination,
            ...params
        }
        getProduct(combinedParams).then((ress: any) => {
            setData(ress?.data?.data)
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


    useEffect(() => {
        fetchData(paginationShared, valueSearch)
    }, [dataModal, statusModal])
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}
            <FormSearch
                onSearch={onSearch}

            >
                <Col span={4}>
                    <BaseFormInput
                        type="input"
                        name="name"
                        placeholder="Tên món ăn"

                    />
                </Col>
            </FormSearch>
            <BaseTable
                columType={ColumnOrderProduct}
                dataSource={data}
                configUrl={configProduct}
                pagination={pagination}
                onChangePaniga={onChangePaniga}
            />
            {/* </BaseFieldset> */}
        </>
    )
}