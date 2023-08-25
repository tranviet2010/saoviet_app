import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../../components/core/search/formSearch"
import ModalCore from "../../../components/core/modal/modalCore"
import { ColumSchool } from "./column.partern"
import { BaseTable } from "../../../components/core/table/tableCore"
import BaseFieldset from "../../../components/core/fieldset"
import { configParnerSchool, getPartnerSchool } from "../../../api/partner.api"
import { paginationShared } from "../../../components/core/variable/variable"
import { useSelector } from "react-redux"
import BaseFormInput from "../../../components/core/input/formInput"
import { Col } from "antd"


export default function PartnerSchool() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const dataModal = useSelector((state: any) => state.global.dataModal);
    const statusModal = useSelector((state: any) => state.global.statusModal)
    const [valueSearch, setValueSearch] = useState<any>();


    const onSearch = (value: any) => {
        setValueSearch(value)
        fetchData(pagination, value)
    }

    const fetchData = useCallback((pagination: any, params: any) => {
        const combinedParams = {
            ...pagination,
            ...params,
        }
        getPartnerSchool(combinedParams).then((ress: any) => {
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
    }, [dataModal, statusModal])
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}
            <FormSearch
                onSearch={onSearch}
                // notDate
            >
                <Col span={4}>
                    <BaseFormInput type="input" name="name" placeholder="Nhập tên trường"/>
                </Col>
            </FormSearch>
            <BaseTable
                pagination={pagination}
                columType={ColumSchool}
                dataSource={data}
                configUrl={configParnerSchool}
                onChangePaniga={onChangePaniga}
            />
            {/* </BaseFieldset> */}
        </>
    )
}