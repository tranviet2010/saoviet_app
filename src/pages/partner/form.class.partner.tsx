
import { Col, Form, Row } from "antd"
import { useState } from "react"
import { FormSubmit } from "../../components/core/form/formSubmit";

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
            type={type}
        >
            <Row gutter={16}>

            </Row>

        </FormSubmit>
    )
}
