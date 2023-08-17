import React, { useEffect, useState } from "react"
import { BaseTable } from "../../../components/core/table/tableCore"
import { ColumManageMenu } from "./columnManageMenu"
import FormSearch from "../../../components/core/search/formSearch"
import ModalCore from "../../../components/core/modal/modalCore"
import { FormManageMenu } from "./formManagemenu"
import BaseFieldset from "../../../components/core/fieldset"
import { useSelector } from "react-redux"
import axiosInstance from "../../../api/request"
import { getManageMenu } from "../../../api/menu.api"

export default function ManageMenu() {
    const [data, setData] = useState([])

    useEffect(() => {
        getManageMenu({limit:5}).then((res) => {
            setData(res?.data?.data)
        })
    }, [])
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}
            <FormSearch>
                <ModalCore
                    nameButton="Thêm mới"
                    // title="+ Thêm thực đơn và món ăn"
                    title="+ Thêm"
                    width={2000}
                >
                    <FormManageMenu type="add" />
                </ModalCore>
            </FormSearch>
            <BaseTable columType={ColumManageMenu} dataSource={data} />
            {/* </BaseFieldset> */}
        </>
    )
}