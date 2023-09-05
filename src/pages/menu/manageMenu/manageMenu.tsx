import React, { useCallback, useEffect, useState } from "react"
import { BaseTable } from "../../../components/core/table/tableCore"
import { ColumManageMenu } from "./columnManageMenu"
import FormSearch from "../../../components/core/search/formSearch"
import { configManageMenu, getManageMenu } from "../../../api/menu.api"
import { paginationShared } from "../../../components/core/variable/variable"
import { Col } from "antd"
import BaseFormInput from "../../../components/core/input/formInput"
import { useSelector } from "react-redux"

export default function ManageMenu() {
    const [data, setData] = useState([])
    const [valueSearch, setValueSearch] = useState<any>()
    const [pagination, setPagination] = useState(paginationShared)
    const dataModal = useSelector((state: any) => state.global.dataModal);
    const statusModal = useSelector((state: any) => state.global.statusModal)


    const onSearch = (value: any) => {
        setValueSearch(value)
        fetchData(pagination, value)
    }

    const fetchData = useCallback((pagination: any, params: any) => {
        const combinedParams = {
            ...pagination,
            ...params,
            order_field:""
        }
        getManageMenu(combinedParams).then((ress: any) => {
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
            >
                <Col span={4}>
                    <BaseFormInput type="input" placeholder="Nhập tên thực đơn" name="name" />
                </Col>
                <Col span={4}>
                    <BaseFormInput type="option" placeholder="Chọn theo trường" typeParam="school" name="partnerId" />
                </Col>
                <Col span={4}>
                    <BaseFormInput getId type="option" name="status" placeholder="Trạng thái" typeParam="status" />
                </Col>
            </FormSearch>
            <BaseTable
                columType={ColumManageMenu}
                dataSource={data}
                pagination={pagination}
                onChangePaniga={onChangePaniga}
                configUrl={configManageMenu}
            />
            {/* </BaseFieldset> */}
        </>
    )
}