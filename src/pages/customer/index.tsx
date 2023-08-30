import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import { BaseTable } from "../../components/core/table/tableCore"
import { paginationShared } from "../../components/core/variable/variable"
import { useSelector } from "react-redux"
import { Col } from "antd"
import BaseFormInput from "../../components/core/input/formInput"
import { ColumnCustomer } from "./column.customer"
import { getCustom } from "../../api/custom.api"


export default function Customer() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const dataModal = useSelector((state: any) => state.global.dataModal);
    const statusModal = useSelector((state: any) => state.global.statusModal)
    const [valueSearch, setValueSearch] = useState<any>()

    const fetchData = useCallback((pagination: any, params: any) => {
        const combinedParams = {
            ...pagination,
            ...params,
            order_field: 'id'
        }
        getCustom(combinedParams).then((ress: any) => {
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
            <FormSearch
                onSearch={onSearch}
                notDate
                notadd
            >
                <Col span={4}>
                    <BaseFormInput
                        type="input"
                        name="mobile"
                        placeholder="Số điện thoại"
                    />
                </Col>
                <Col span={4}>
                    <BaseFormInput
                        type="input"
                        name="name"
                        placeholder="Họ tên"

                    />
                </Col>
                <Col span={4}>
                    <BaseFormInput
                        type="input"
                        name="email"
                        placeholder="Email"

                    />
                </Col>
                <Col span={4}>
                    <BaseFormInput
                        type="option"
                        name="status"
                        placeholder="Trạng thái"
                        data={[
                            { autoid: 1, name: "Hoạt động" },
                            { autoid: 0, name: "Tạm dừng" }
                        ]}

                    />
                </Col>
            </FormSearch>
            <BaseTable
                columType={ColumnCustomer}
                dataSource={data}
                // configUrl={}
                pagination={pagination}
                onChangePaniga={onChangePaniga}
            />
        </>
    )
}