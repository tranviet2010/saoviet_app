
import { Col, Form, Row } from "antd"
import { useEffect, useState } from "react"
import { FormSubmit } from "../../components/core/form/formSubmit";
import BaseFormInput from "../../components/core/input/formInput";
import UpLoadFile from "../../components/core/input/uploadFile";
import { configBanner } from "../../api/banner.api";
import { configCustome } from "../../api/custom.api";

export const FormCustom: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues);
    // const onchange = (change:any) => {
    //     setInitialValue(change)
    // }
    // useEffect(() => {
    //     setInitialValue(initialValue)
    // }, [initialValues])

    return (
        <FormSubmit
            initialValues={initialValue}
            // onchange={onchange}
            configUrl={configCustome}
            type={type}
        >
            <Row gutter={16}>
                <Col span={8}>
                    <BaseFormInput type="input" placeholder="Nhập tên" name="name" label="Tên người dùng" required />
                </Col>
                {/* <Col span={8} >
                    <BaseFormInput type="option" placeholder="Chọn kiểu" name="type" label="Kiểu" typeParam="BANNER"
                    />
                </Col> */}


                <Col span={8} >
                    <BaseFormInput type="input" placeholder="" name="introduce" label="Giới thiệu" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="switch" placeholder="" label="Trạng thái" name="status" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="" name="mobile" label="Số điện thoại" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="" name="address" label="Địa chỉ" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="" name="email" label="Email" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Chọn kiểu" name="type" label="Kiểu" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="input" placeholder="Chọn kiểu" name="type" label="Kiểu" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="option" placeholder="Loại khách hàng" name="custType" label="Loại khách hàng" typeParam="CUSTOMER" />
                </Col>


                <Col span={24} >
                    <UpLoadFile onchange={(e: any) => setInitialValue({ ...initialValue, avatar: e && e[0] })} image_url={initialValue?.avatar} title="Avatar" />
                </Col>

            </Row>

        </FormSubmit>
    )
}
