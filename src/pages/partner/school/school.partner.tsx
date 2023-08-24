import { useEffect, useState } from "react"
import FormSearch from "../../../components/core/search/formSearch"
import ModalCore from "../../../components/core/modal/modalCore"
import { ColumSchool } from "./column.partern"
import { BaseTable } from "../../../components/core/table/tableCore"
import BaseFieldset from "../../../components/core/fieldset"
import { configParnerSchool, getPartnerSchool } from "../../../api/partner.api"
import { paginationShared } from "../../../components/core/variable/variable"
import { useSelector } from "react-redux"


export default function PartnerSchool() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const dataModal = useSelector((state: any) => state.global.dataModal);
    const statusModal = useSelector((state: any) => state.global.statusModal)

    useEffect(() => {
        getPartnerSchool(paginationShared).then((res) => {
            setData(res?.data?.data)
        })
    }, [dataModal, statusModal])
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}
            <FormSearch />
            <BaseTable
                pagination={pagination}
                columType={ColumSchool}
                dataSource={data}
                configUrl={configParnerSchool}
            />
            {/* </BaseFieldset> */}
        </>
    )
}