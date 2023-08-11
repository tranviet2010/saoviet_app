
import { Col, Form, Row } from "antd"
import { useState } from "react"
import { FormSubmit } from "../../../components/core/form/formSubmit";
import BaseFormInput from "../../../components/core/input/formInput";
import UpLoadFileMain from "../../../components/core/input/uploadFile";

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
            <Row gutter={8}>
                <Col span={12}>
                    <BaseFormInput label="User Name:" name="user_name" type="input" placeholder="Nhập Username" />
                </Col>
                <Col span={12}>
                    <BaseFormInput label="Mật khẩu:" name="password" type="input" placeholder="******" />
                </Col>
                <Col span={24}>
                    <BaseFormInput label="Họ và tên" name="name" type="input" placeholder="Nhập họ và tên" />
                </Col>
                <Col span={24}>
                    <BaseFormInput label="Số điện thoại:" name="phone" type="input" placeholder="Nhập số điện thoại" />
                </Col>
                <Col span={24}>
                    <BaseFormInput label="Email:" type="input" name="email" placeholder="Nhập email" />
                </Col>
                <Col span={24}>
                    <BaseFormInput label="Địa chỉ:" type="input" name="address" placeholder="Nhập địa chỉ" />
                </Col>
                <Col span={24}>
                    <BaseFormInput label="Quyền:" type="input" name="permise" placeholder="" />
                </Col>
                <Col span={24}>
                    <BaseFormInput label="Bộ phận:" type="option" placeholder="Chọn bộ phận" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <UpLoadFileMain onchange={(e: any) => setInitialValue({ ...initialValues, image_url: e })} image_url={initialValue?.image_url} />
                </Col>
            </Row>
        </FormSubmit>
    )
}
