import { useEffect, useState } from "react"
import FormSearch from "../../../components/core/search/formSearch"
import ModalCore from "../../../components/core/modal/modalCore"
import { ColumClass } from "../school/column.partern"
import { BaseTable } from "../../../components/core/table/tableCore"
import { paginationShared } from "../../../components/core/variable/variable"
import { configParnerClass, getPartnerClass } from "../../../api/partner.api"
import { useSelector } from "react-redux"


export default function PartnerClass() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const statusModal = useSelector((state: any) => state.global.statusModal)

    useEffect(() => {
        getPartnerClass(paginationShared).then((res) => {
            setData(res?.data?.data)
        })
    }, [statusModal])
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}
            <FormSearch />
            <BaseTable
                pagination={pagination}
                columType={ColumClass}
                dataSource={data}
                configUrl={configParnerClass}
            />
            {/* </BaseFieldset> */}
        </>
    )
}