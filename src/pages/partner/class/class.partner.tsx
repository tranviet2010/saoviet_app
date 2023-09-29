import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../../components/core/search/formSearch"
import { BaseTable } from "../../../components/core/table/tableCore"
import { paginationShared } from "../../../components/core/variable/variable"
import { configParnerClass, getPartnerClass } from "../../../api/partner.api"
import { useSelector } from "react-redux"
import { Col } from "antd"
import BaseFormInput from "../../../components/core/input/formInput"
import { ColumParterClass } from "./column.partner"


export default function PartnerClass() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const statusModal = useSelector((state: any) => state.global.statusModal)
    const dataSchool = useSelector((state: any) => state.usersSlice.param.school)
    const [valueSearch, setValueSearch] = useState<any>()

    const onSearch = (value: any) => {
        setValueSearch(value)
        fetchData(pagination, value)
    }

    const fetchData = useCallback((pagination: any, params: any) => {
        const combinedParams = {
            ...pagination,
            ...params,
        }
        getPartnerClass(combinedParams).then((ress: any) => {
            let data: any = ress?.data?.data;
            const updatedAutoObjects = data?.map((autoObj: any) => {  //map tên menu
                const matchingSchool = dataSchool?.find((menuObj: any) => menuObj.autoid === autoObj.partnerId);
                if (matchingSchool) {
                    return { ...autoObj, nameSchool: matchingSchool.name };
                }
                return autoObj;
            });
            setData(updatedAutoObjects)
            setPagination({ ...pagination, total: ress?.data?.totalCount })
        })
    }, [])

    const onChangePaniga = (e: any) => {
        setPagination(e)
        fetchData(e, valueSearch)
    }
    useEffect(() => {
        fetchData(paginationShared, valueSearch)
        setPagination(paginationShared)
    }, [statusModal, valueSearch])
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}
            <FormSearch
                onSearch={onSearch}
            >
                <Col span={4}>
                    <BaseFormInput type="option" placeholder="Tìm kiếm theo tên trường" name="partnerId" typeParam="school" />
                </Col>
                <Col span={4}>
                    <BaseFormInput type="input" placeholder="Tìm kiếm theo tên lớp" name="name" />
                </Col>
                <Col span={4}>
                    <BaseFormInput getId type="option" name="status" placeholder="Trạng thái" typeParam="status" />
                </Col>
            </FormSearch>
            <BaseTable
                pagination={pagination}
                columType={ColumParterClass}
                dataSource={data}
                configUrl={configParnerClass}
                onChangePaniga={onChangePaniga}
            />
            {/* </BaseFieldset> */}
        </>
    )
}