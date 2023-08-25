import { BaseTable } from "../../../components/core/table/tableCore"
import FormSearch from "../../../components/core/search/formSearch"
import ModalCore from "../../../components/core/modal/modalCore"
import { ColumDetailManageMenu } from "./columnDetailMenu"
import { FormDetailManageMenu } from "./formDetailMenu"
import { useEffect, useState } from "react"
import { getManageMenuDetail } from "../../../api/menu.api"

export default function ManageMenu() {
    const [data,setData]=useState([])
    
    useEffect(() => {
        getManageMenuDetail({limit:5}).then((res) => {
            setData(res?.data?.data)
        })
    }, [])
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}
            <FormSearch />
            <BaseTable columType={ColumDetailManageMenu} dataSource={data} />
            {/* </BaseFieldset> */}
        </>
    )
}