import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import ModalCore from "../../components/core/modal/modalCore"
import { BaseTable } from "../../components/core/table/tableCore"
import { paginationShared } from "../../components/core/variable/variable"
import { ColumnBanner } from "./column.banner"
import { configBanner, getBanner } from "../../api/banner.api"
import { FormBanner } from "./form.banner"
import { useSelector } from "react-redux"
import { Col } from "antd"
import BaseFormInput from "../../components/core/input/formInput"


export default function Bannner() {
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
        getBanner(combinedParams).then((ress: any) => {
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
                        type="option"
                        name="type"
                        typeParam="BANNER"
                        placeholder="Chọn kiểu"

                    />
                </Col>
                <Col span={4}>
                    <BaseFormInput
                        type="input"
                        name="title"
                        placeholder="Tìm kiếm theo tiêu đề"

                    />
                </Col>
            </FormSearch>
            <BaseTable
                columType={ColumnBanner}
                dataSource={data}
                configUrl={configBanner}
                pagination={pagination}
                onChangePaniga={onChangePaniga}
            />
            {/* </BaseFieldset> */}
        </>
    )
}