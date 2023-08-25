
import { Col, Form, Row } from "antd"
import { useState } from "react"
import { FormSubmit } from "../../../components/core/form/formSubmit";
import BaseFormInput from "../../../components/core/input/formInput";
import UpLoadFileMain from "../../../components/core/input/uploadFile";

export const FormDetailManageMenu: React.FC<any> = ({ initialValues, type }) => {
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
            type={type}
        >
            <Row gutter={16}>
                <Col span={8}>
                    <BaseFormInput label="Chọn món" name="productId" type="option" placeholder="Chọn món" typeParam="product" />
                </Col>
                <Col span={8}>
                    <BaseFormInput label="Số thứ tự" name="ord" type="input" placeholder="Nhập số thứ tự" />
                </Col>

            </Row>
            {/* <Row>
                <Col>
                    <UpLoadFileMain onchange={(e: any) => setInitialValue({ ...initialValues, image_url: e })} image_url={initialValue?.image_url} />
                </Col>
            </Row> */}
        </FormSubmit>
    )
}
