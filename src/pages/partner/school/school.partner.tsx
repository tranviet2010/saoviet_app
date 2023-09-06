import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../../components/core/search/formSearch"
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
    const dataModal = useSelector((state: any) => state.global.dataModal)
    const statusModal = useSelector((state: any) => state.global.statusModal)
    const dataSchool = useSelector((state: any) => state.usersSlice.param)?.school?.map((val: any) => ({ ...val, autoid: val?.value }))
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
                    <BaseFormInput type="option" name="name" placeholder="Chọn trường" data={dataSchool} />
                </Col>
                <Col span={4}>
                    <BaseFormInput getId type="option" name="status" placeholder="Trạng thái" typeParam="status" />
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