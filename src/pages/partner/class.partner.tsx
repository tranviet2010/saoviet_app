import { useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import ModalCore from "../../components/core/modal/modalCore"
import { ColumClass } from "./column.partern"
import { BaseTable } from "../../components/core/table/tableCore"
import { paginationShared } from "../../components/core/variable/variable"
import { getPartnerClass } from "../../api/partner.api"


export default function PartnerClass() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState(paginationShared)

    useEffect(() => {
        getPartnerClass(paginationShared).then((res) => {
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
            <BaseTable columType={ColumClass} dataSource={data} />
            {/* </BaseFieldset> */}
        </>
    )
}