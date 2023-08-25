import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../../components/core/search/formSearch"
import ModalCore from "../../../components/core/modal/modalCore"
import { ColumClass } from "../school/column.partern"
import { BaseTable } from "../../../components/core/table/tableCore"
import { paginationShared } from "../../../components/core/variable/variable"
import { configParnerClass, getPartnerClass } from "../../../api/partner.api"
import { useSelector } from "react-redux"
import { Col } from "antd"
import BaseFormInput from "../../../components/core/input/formInput"


export default function PartnerClass() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const statusModal = useSelector((state: any) => state.global.statusModal)
    const [valueSearch, setValueSearch] = useState<any>()

    const onSearch = (value: any) => {
        setValueSearch(value)
        fetchData(pagination, value)
    }

    const fetchData = useCallback((pagination: any, params: any) => {
        const combinedParams = {
            ...pagination,
            ...params,
        }
        getPartnerClass(combinedParams).then((ress: any) => {
            setData(ress?.data?.data)
            setPagination({ ...pagination, total: ress?.data?.totalCount })
        })
    }, [])

    const onChangePaniga = (e: any) => {
        setPagination(e)
        fetchData(e, valueSearch)
    }
    useEffect(() => {
        fetchData(paginationShared, valueSearch)
        setPagination(paginationShared)
    }, [statusModal,valueSearch])
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}
            <FormSearch
                onSearch={onSearch}
            >
                <Col span={4}>
                    <BaseFormInput type="input" placeholder="Tìm kiếm theo tên lớp" name="name"/>
                </Col>
            </FormSearch>
            <BaseTable
                pagination={pagination}
                columType={ColumClass}
                dataSource={data}
                configUrl={configParnerClass}
                onChangePaniga={onChangePaniga}
            />
            {/* </BaseFieldset> */}
        </>
    )
}