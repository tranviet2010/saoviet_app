
import { Col, Form, Row } from "antd"
import { useState } from "react"
import { FormSubmit } from "../../../components/core/form/formSubmit";
import BaseFormInput from "../../../components/core/input/formInput";
import UpLoadFileMain from "../../../components/core/input/uploadFile";
import TableCore from "../../../components/core/table";
import { ColumManageMenuAddFeild } from "./columnManageMenu";

export const FormManageMenu: React.FC<any> = ({ initialValues, type }) => {
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
                <Col span={6}>
                    <BaseFormInput type="option" placeholder="Chọn trường" />
                </Col>
                <Col span={6} >
                    <BaseFormInput type="option" placeholder="Chọn thực đơn" />
                </Col>
            </Row>

            <TableCore column={ColumManageMenuAddFeild}/>

        </FormSubmit>
    )
}
