
import { Col, Form, Row } from "antd"
import { useEffect, useState } from "react"
import { FormSubmit } from "../../components/core/form/formSubmit";
import BaseFormInput from "../../components/core/input/formInput";
import UpLoadFile from "../../components/core/input/uploadFile";
import { configBanner } from "../../api/banner.api";
import { configCustome } from "../../api/custom.api";
import { getPartnerClass } from "../../api/partner.api";
import { useSelector } from "react-redux";

export const FormCustom: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues)
    const [dataClass, setDataClass] = useState<any>()
    const dataCustom = useSelector((state: any) => state.usersSlice.param.CUSTOMER)?.map((val:any)=>({...val,autoid:val?.name}))

    const onchange = (allValue: any, changed: any) => {
        if (changed.partnerId) {
            getPartnerClass({ limit: -1, order_field: 'autoid', partnerId: changed?.partnerId }).then((res: any) => {
                let dataConvert = res?.data?.data?.map((value: any) => ({ ...value, value: value?.name }))
                setDataClass(dataConvert)
            })
        }
    }
    useEffect(() => {

    }, [initialValues])

    return (
        <FormSubmit
            initialValues={initialValue}
            onchange={onchange}
            configUrl={configCustome}
            type={type}
        >
            <Row gutter={16}>
                <Col span={8}>
                    <BaseFormInput type="input" placeholder="Nhập tên" name="custName" label="Tên người dùng" required />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="" name="password" label="Mật khẩu" typeParam="BANNER"
                    />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="" name="introduce" label="Giới thiệu" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="option" placeholder="" label="Chọn trường" name="partnerId" typeParam="school" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="option" placeholder="" label="Chọn lớp" name="subClassId" data={dataClass} />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="" name="mobileNumber" label="Số điện thoại" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="" name="address" label="Địa chỉ" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="" name="email" label="Email" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="NHập nickName" name="nickName" label="NickName" />
                </Col>
                {/* <Col span={8} >
                    <BaseFormInput type="input" placeholder="Chọn kiểu" name="type" label="Kiểu" />
                </Col> */}
                <Col span={8} >
                    <BaseFormInput type="option" placeholder="Loại khách hàng" name="custType" label="Loại khách hàng" data={dataCustom} />
                </Col>


                <Col span={24} >
                    <UpLoadFile onchange={(e: any) => setInitialValue({ ...initialValue, avatar: e && e[0] })} image_url={initialValue?.avatar} title="Avatar" />
                </Col>

            </Row>

        </FormSubmit>
    )
}
