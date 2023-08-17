import React, { useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import ModalCore from "../../components/core/modal/modalCore"
import { ColumParterClass } from "./column.partner"
import { BaseTable } from "../../components/core/table/tableCore"
import { getPartner } from "../../api/parnter.api"


export default function ManageMenu() {
    const [data, setData] = useState();


    const fetchData = () => {
        getPartner().then((res) => {
            setData(res.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}
            <FormSearch>
                <ModalCore
                    nameButton="Thêm mới"
                    // title="+ Thêm thực đơn và món ăn"
                    title="+ Thêm"
                    width={1500}
                >  
                

                </ModalCore>
            </FormSearch>
            <BaseTable columType={ColumParterClass} dataSource={data} />
        </>
    )
}