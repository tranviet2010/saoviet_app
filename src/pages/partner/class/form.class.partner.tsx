
import { Col, Form, Row } from "antd"
import { useState } from "react"
import { FormSubmit } from "../../../components/core/form/formSubmit";
import BaseFormInput from "../../../components/core/input/formInput";
import UpLoadFile from "../../../components/core/input/uploadFile";
import TextArea from "antd/es/input/TextArea";
import { configParnerClass } from "../../../api/partner.api";

export const FormClassPartner: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues);
    const onchange = () => {
        setInitialValue({
            code: "ABC"
        })
    }
    return (
        <FormSubmit
            initialValues={initialValue}
            // onchange={onchange}
            // urlRequest={UrlAccount.urlPost}
            configUrl={configParnerClass}
            type={type}
        >
            <Row gutter={16}>
                <Col span={8}>
                    <BaseFormInput type="option" label="Chọn trường" placeholder="Chọn trường" name="partnerId" required typeParam="school"/>
                </Col>
                <Col span={8}>
                    <BaseFormInput type="input" label="Tên lớp" placeholder="Nhập tên lớp" name="name" required />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="switch" label="Trạng thái hoạt động" name="status" />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="input" label="Số lượng học sinh" placeholder="Nhập số lượng học sinh" name="numsOfStudent" />
                </Col>
            </Row>

        </FormSubmit>
    )
}
