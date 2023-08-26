import React, { useCallback, useEffect, useState } from "react"
import { BaseTable } from "../../../components/core/table/tableCore"
import { ColumManageMenu } from "./columnManageMenu"
import FormSearch from "../../../components/core/search/formSearch"
import { getManageMenu } from "../../../api/menu.api"
import { paginationShared } from "../../../components/core/variable/variable"
import { Col } from "antd"
import BaseFormInput from "../../../components/core/input/formInput"

export default function ManageMenu() {
    const [data, setData] = useState([])
    const [valueSearch, setValueSearch] = useState<any>()
    const [pagination, setPagination] = useState(paginationShared)


    const onSearch = (value: any) => {
        setValueSearch(value)
        fetchData(pagination, value)
    }

    const fetchData = useCallback((pagination: any, params: any) => {
        const combinedParams = {
            ...pagination,
            ...params,
        }
        getManageMenu(combinedParams).then((ress: any) => {
            setData(ress?.data?.data)
            setPagination({ ...pagination, total: ress?.data?.totalCount })
        })
    }, [])



    useEffect(() => {
        fetchData(paginationShared, valueSearch)
    }, [])
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}

            <FormSearch
                onSearch={onSearch}
            >
                <Col span={4}>
                    <BaseFormInput type="input" placeholder="Nhập tên thực đơn" />
                </Col>
            </FormSearch>
            <BaseTable columType={ColumManageMenu} dataSource={data} />
            {/* </BaseFieldset> */}
        </>
    )
}