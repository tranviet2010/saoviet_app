import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import { BaseTable } from "../../components/core/table/tableCore"
import { paginationShared } from "../../components/core/variable/variable"
import { useSelector } from "react-redux"
import { Col } from "antd"
import BaseFormInput from "../../components/core/input/formInput"
import { configProduct } from "../../api/product.api"
import { ColumnRegisClass } from "./column.regisClass"
import { getCpms } from "../../api/regisClass"


export default function RegisClass() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const dataModal = useSelector((state: any) => state.global.dataModal)
    const dataParam = useSelector((state: any) => state.usersSlice.param)
    const statusModal = useSelector((state: any) => state.global.statusModal)
    const [valueSearch, setValueSearch] = useState<any>()

    const fetchData = useCallback((pagination: any, params: any) => {
        const combinedParams = {
            ...pagination,
            ...params,
            custName:params?.custName&&`like:${params?.custName}`
        }
        getCpms(combinedParams).then((ress: any) => {
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
                        name="custName"
                        placeholder="Tên khách hàng"

                    />
                </Col>
                <Col span={4}>
                    <BaseFormInput getId type="option" name="status" placeholder="Trạng thái" typeParam="status" />
                </Col>
            </FormSearch>
            <BaseTable
                columType={ColumnRegisClass(dataParam)}
                dataSource={data}
                configUrl={configProduct}
                pagination={pagination}
                onChangePaniga={onChangePaniga}
                classT
            />
            {/* </BaseFieldset> */}
        </>
    )
}