
import { Col, Form, Row } from "antd"
import { useState } from "react"
import { FormSubmit } from "../../../components/core/form/formSubmit";
import BaseFormInput from "../../../components/core/input/formInput";
import UpLoadFile from "../../../components/core/input/uploadFile";
import { configDetailMenu } from "../../../api/menu.api";
import { getTimeUnix } from "../../../utils/convertData";

export const FormDetailMenu: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues);
    const onchange = (e: any, v: any) => {
        setInitialValue(initialValue)
    }
    return (
        <FormSubmit
            initialValues={initialValue}
            onchange={onchange}
            configUrl={configDetailMenu}
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
                    <BaseFormInput type="option" placeholder="Chọn trường" label="Chọn trường" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="option" placeholder="Chọn thực đơn" label="Chọn thực đơn" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="switch" label="Trạng thái" />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="input" label="Tên thực đơn" name="name" />
                </Col>
                {/* <Col span={8}>
                    <BaseFormInput type="input" label="Định lượng sống" name="name" />
                </Col> */}
                {/* <Col span={8}>
                    <BaseFormInput type="input" label="DL chính" name="name" />
                </Col> */}
                {/* <Col span={8}>
                    <BaseFormInput type="input" label="Lượng KL" name="name" />
                </Col> */}
                <Col span={8}>
                    <BaseFormInput type="input" label="Giá tham khảo" name="price" />
                </Col>
                {/* <Col span={8}>
                    <BaseFormInput type="input" label="Đơn vị" name="name" />
                </Col> */}
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
