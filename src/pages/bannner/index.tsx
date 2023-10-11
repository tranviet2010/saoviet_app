import { useCallback, useEffect, useState } from "react"
import FormSearch from "../../components/core/search/formSearch"
import { BaseTable } from "../../components/core/table/tableCore"
import { paginationShared } from "../../components/core/variable/variable"
import { ColumnBanner } from "./column.banner"
import { configBanner, getBanner } from "../../api/banner.api"
import { FormBanner } from "./form.banner"
import { useSelector } from "react-redux"
import { Col } from "antd"
import BaseFormInput from "../../components/core/input/formInput"

export default function Bannner() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState(paginationShared)
    const dataModal = useSelector((state: any) => state.global.dataModal)
    const statusModal = useSelector((state: any) => state.global.statusModal)
    const [valueSearch, setValueSearch] = useState<any>()
    const dataParam = useSelector((state: any) => state.usersSlice.param).BANNER

    const fetchData = useCallback((pagination: any, params: any) => {
        const combinedParams = {
            ...pagination,
            ...params,
            order_field: 'id'
        }

        getBanner(combinedParams).then((ress: any) => {
            const mappedArray = ress?.data?.data?.map((itemB: any) => {
                const matchingItemA = dataParam?.find((itemA: any) => itemA.name === itemB.type);
                if (matchingItemA) {
                    return {
                        ...itemB,
                        type_name: matchingItemA.value
                    };
                }
                return itemB;
            });
            setData(mappedArray)
            setPagination({ ...pagination, total: ress?.data?.totalCount })
        })
    }, [dataParam])

    const onSearch = (value: any) => {
        setValueSearch(value)
        fetchData(pagination, value)
    }
    const onChangePaniga = (e: any) => {
        setPagination(e)
        fetchData(e, valueSearch)
    }
    useEffect(() => {
        fetchData(paginationShared, valueSearch)
    }, [dataModal, statusModal, dataParam])
    return (
        <>
            {/* <BaseFieldset title="Quản lý thực đơn"> */}
            <FormSearch
                onSearch={onSearch}
            >
                <Col span={4}>
                    <BaseFormInput
                        type="option"
                        name="type"
                        typeParam="BANNER"
                        placeholder="Chọn kiểu"
                    />
                </Col>
                <Col span={4}>
                    <BaseFormInput
                        type="input"
                        name="title"
                        placeholder="Tìm kiếm theo tiêu đề"
                    />
                </Col>
                <Col span={4}>
                    <BaseFormInput getId type="option" name="status" placeholder="Trạng thái" typeParam="status" />
                </Col>
            </FormSearch>
            <BaseTable
                columType={ColumnBanner}
                dataSource={data}
                configUrl={configBanner}
                pagination={pagination}
                onChangePaniga={onChangePaniga}
            />
            {/* </BaseFieldset> */}
        </>
    )
}