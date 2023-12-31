import { BaseTable } from "../../../components/core/table/tableCore"
import FormSearch from "../../../components/core/search/formSearch"
import { ColumDetailManageMenu } from "./columnDetailMenu"
import { FormDetailManageMenu } from "./formDetailMenu"
import { useCallback, useEffect, useState } from "react"
import { configDetailMenu, getManageMenuDetail } from "../../../api/menu.api"
import { useSelector } from "react-redux"
import { paginationShared } from "../../../components/core/variable/variable"
import { Col } from "antd"
import BaseFormInput from "../../../components/core/input/formInput"
import dayjs from "dayjs"

export default function ManageMenu() {
    const [data, setData] = useState([])
    const [partner, setPartner] = useState()
    const menu = useSelector((state: any) => state.usersSlice.param.menu)
    const menuConfig = menu?.filter((val: any) => val.rootId == undefined && val.partnerId == partner)
    const product = useSelector((state: any) => state.usersSlice.param.product)
    const dataModal = useSelector((state: any) => state.global.dataModal)
    const statusModal = useSelector((state: any) => state.global.statusModal)
    const [pagination, setPagination] = useState(paginationShared)
    const [valueSearch, setValueSearch] = useState<any>()

    const fetchData = useCallback((pagination: any, params: any) => {
        const combinedParams = {
            ...pagination,
            ...params
        }
        getManageMenuDetail(combinedParams).then((res) => {
            let data: any = res?.data?.data
            const updatedAutoObjects = data?.map((autoObj: any) => {  //map tên menu
                const matchingMenu = menu?.find((menuObj: any) => menuObj.id === autoObj.menuId);
                if (matchingMenu) {
                    return { ...autoObj, nameMenu: matchingMenu.name };
                }
                return autoObj;
            });
            const endConvert = updatedAutoObjects?.map((autoObj: any) => {  //map tên menu
                const matchingMenu1 = product?.find((menuObj: any) => menuObj.autoid === autoObj.productId);
                if (matchingMenu1) {
                    return { ...autoObj, nameProduct: matchingMenu1.name };
                }
                return autoObj;
            });

            setData(endConvert)
            setPagination({ ...pagination, total: res?.data?.totalCount })
        })
    }, [menu])

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
    }, [menu, product, dataModal, statusModal])
    return (
        <>
            <FormSearch
                onSearch={onSearch}
                notDate
            >
                <Col span={4}>
                    <BaseFormInput getId type="option" name="partnerId" placeholder="Trường" typeParam="school" onChange={(e: any) => setPartner(e)} />
                </Col>
                <Col span={4}>
                    <BaseFormInput getId type="option" name="menu_id" placeholder="Thực đơn" data={menuConfig} />
                </Col>
                <Col span={4}>
                    <BaseFormInput getId type="option" name="status" placeholder="Trạng thái" typeParam="status" />
                </Col>
                {/* <Col span={4}>
                    <BaseFormInput getId type="option" name="productId" placeholder="Món ăn" typeParam="product" />
                </Col> */}
            </FormSearch>
            <BaseTable
                columType={ColumDetailManageMenu}
                dataSource={data}
                pagination={pagination}
                configUrl={configDetailMenu}
                onChangePaniga={onChangePaniga}
            />
        </>
    )
}