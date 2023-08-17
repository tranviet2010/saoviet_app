import { useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import ModalCore from "../../components/core/modal/modalCore"
import { BaseTable } from "../../components/core/table/tableCore"
import BaseFieldset from "../../components/core/fieldset"
import { getPartnerSchool } from "../../api/partner.api"
import { paginationShared } from "../../components/core/variable/variable"
import { ColumnBanner } from "./column.banner"
import { getBanner } from "../../api/banner.api"
import { FormBanner } from "./form.banner"


export default function Bannner() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState(paginationShared)

    useEffect(() => {
        getBanner(paginationShared).then((res) => {
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
                    title="+ Thêm mới banner"
                    width={1200}
                >
                    <FormBanner
                        type="add"
                        urlAdd="banner"
                    />
                </ModalCore>
            </FormSearch>
            <BaseTable columType={ColumnBanner} dataSource={data} />
            {/* </BaseFieldset> */}
        </>
    )
}