
import { Col, Form, Row } from "antd"
import { useState } from "react"
import { FormSubmit } from "../../../components/core/form/formSubmit";
import BaseFormInput from "../../../components/core/input/formInput";
import UpLoadFile from "../../../components/core/input/uploadFile";
import { configParnerSchool } from "../../../api/partner.api";
import TextArea from "antd/es/input/TextArea";

export const FormSchoolPartner: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues);
    return (
        <FormSubmit
            initialValues={initialValue}
            // onchange={onchange}
            // urlRequest={UrlAccount.urlPost}
            configUrl={configParnerSchool}
            type={type}
        >
            <Row gutter={16}>
                <Col span={8}>
                    <BaseFormInput type="input" label="Tên trường" placeholder="Nhập tên trường" name="name" />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="input" label="Địa chỉ" placeholder="Nhập địa chỉ" name="address" />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="input" label="Địa chỉ liên hệ" placeholder="Nhập địa chỉ liên hệ" name="contactAddress" />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="input" label="Số điện thoại" placeholder="Nhập số điện thoại" name="mobile" />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="switch" label="Trạng thái hoạt động" name="status"/>
                </Col>
                <Col span={24}>
                    <UpLoadFile onchange={(e: any) => setInitialValue({ ...initialValue, avatar: e[0] })} image_url={initialValue?.avatar} title="Ảnh trường học" />
                </Col>
            </Row>

        </FormSubmit>
    )
}
