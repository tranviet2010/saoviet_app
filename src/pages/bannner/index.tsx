import { useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import ModalCore from "../../components/core/modal/modalCore"
import { BaseTable } from "../../components/core/table/tableCore"
import { paginationShared } from "../../components/core/variable/variable"
import { ColumnBanner } from "./column.banner"
import { getBanner } from "../../api/banner.api"
import { FormBanner } from "./form.banner"
import { useSelector } from "react-redux"


export default function Bannner() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const dataModal = useSelector((state: any) => state.global.dataModal);
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
                        initialValues={dataModal}
                    />
                </ModalCore>
            </FormSearch>
            <BaseTable columType={ColumnBanner} dataSource={data} />
            {/* </BaseFieldset> */}
        </>
    )
}