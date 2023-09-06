
import { Col, Form, Row } from "antd"
import { useState } from "react"
import { FormSubmit } from "../../../components/core/form/formSubmit";
import BaseFormInput from "../../../components/core/input/formInput";
import UpLoadFile from "../../../components/core/input/uploadFile";
import { configManageMenu } from "../../../api/menu.api";

export const FormManageMenu: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues);
    const onchange = (e: any, v: any) => {
        setInitialValue({
            ...e,
            autoid: initialValues ? initialValues.autoid : ""
        })
    }
    return (
        <FormSubmit
            initialValues={initialValue}
            onchange={onchange}
            configUrl={configManageMenu}
            type={type}
        >
            {/* <Row gutter={16}>
                <Col span={6}>
                    <BaseFormInput type="option" placeholder="Chọn trường" />
                </Col>
                <Col span={6} >
                    <BaseFormInput type="option" placeholder="Chọn thực đơn" />
                </Col>
            </Row>

            <TableCore column={ColumManageMenuAddFeild} /> */}
            <Row gutter={16}>
                <Col span={8}>
                    <BaseFormInput type="input" label="Tên thực đơn" name="name" />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="option" label="Trường học áp dụng" name="partnerId" typeParam="school" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="switch" label="Trạng thái" name="status" />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="input" label="Giá tham khảo" name="price" />
                </Col>

                <Col span={8}>
                    <BaseFormInput type="date" label="Ngày tạo" name="createdAt" />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="date" label="Ngày áp dụng" name="applyDate" />
                </Col>
                <Col span={24}>
                    <UpLoadFile onchange={(e: any) => setInitialValue({ ...initialValue, smallImage: e[0] })} image_url={initialValue?.smallImage} title="Ảnh to" />
                </Col>
                <Col span={24}>
                    <UpLoadFile onchange={(e: any) => setInitialValue({ ...initialValue, largeImage: e[0] })} image_url={initialValue?.largeImage} title="Ảnh nhỏ" />
                </Col>
            </Row>

        </FormSubmit>
    )
}
