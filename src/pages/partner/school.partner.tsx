import { useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import ModalCore from "../../components/core/modal/modalCore"
import { ColumSchool } from "./column.partern"
import { BaseTable } from "../../components/core/table/tableCore"
import BaseFieldset from "../../components/core/fieldset"
import { getPartnerSchool } from "../../api/partner.api"
import { paginationShared } from "../../components/core/variable/variable"


export default function PartnerSchool() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState(paginationShared)

    useEffect(() => {
        getPartnerSchool(paginationShared).then((res) => {
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
                </ModalCore>
            </FormSearch>
            <BaseTable columType={ColumSchool} dataSource={data} />
            {/* </BaseFieldset> */}
        </>
    )
}