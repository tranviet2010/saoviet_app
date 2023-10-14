
import { Col, Form, Row } from "antd"
import { useCallback, useEffect, useState } from "react"
import { FormSubmit } from "../../components/core/form/formSubmit";
import BaseFormInput from "../../components/core/input/formInput";
import UpLoadFile from "../../components/core/input/uploadFile";
import { getPartnerClass } from "../../api/partner.api";
import { useSelector } from "react-redux";
import { configRegisClass } from "../../api/regisClass";
import { getCustom } from "../../api/custom.api"

export const FormRegisClass: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues)
    const [data, setData] = useState<any>()
    const [dataClass, setDataClass] = useState<any>()
    const dataCustom = useSelector((state: any) => state.usersSlice.param.CUSTOMER)?.map((val: any) => ({ ...val, autoid: val?.name }))
    const custId = localStorage.getItem('custId');

    const fetchData = useCallback(() => {
        getCustom({limit:-1}).then((ress: any) => {
            let configLogs=ress?.data?.data?.map((val:any)=>({...val,autoid:val?.id,value:val?.name}))
            console.log("configLogs",configLogs);
            setData(configLogs)
        })
    }, [])

    const onchange = (allValue: any, changed: any) => {
        if (changed.partnerId) {
            getPartnerClass({ limit: -1, order_field: 'autoid', partnerId: changed?.partnerId }).then((res: any) => {
                let dataConvert = res?.data?.data?.map((value: any) => ({ ...value, value: value?.name }))
                setDataClass(dataConvert)
            })
        }
    }
    useEffect(() => {
        fetchData()
    }, [initialValues])
    return (
        <FormSubmit
            initialValues={{ ...initialValue }}
            onchange={onchange}
            configUrl={configRegisClass}
            type={type}
        >
            <Row gutter={16}>

                <Col span={8} >
                    <BaseFormInput type="option" placeholder="" label="Chọn trường" name="partnerId" typeParam="school" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="option" placeholder="" label="Chọn lớp" name="subClassId" data={dataClass} />
                </Col>
                {/* <Col span={8} >
                    <BaseFormInput type="input" placeholder="Chọn kiểu" name="type" label="Kiểu" />
                </Col> */}
                <Col span={8} >
                    <BaseFormInput type="option" placeholder="Loại khách hàng" name="custId" label="Khách hàng" data={data} />
                </Col>


                {/* <Col span={24} >
                    <UpLoadFile onchange={(e: any) => setInitialValue({ ...initialValue, avatar: e && e[0] })} image_url={initialValue?.avatar} title="Avatar" />
                </Col> */}

            </Row>

        </FormSubmit>
    )
}
