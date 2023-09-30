
import { Col, Row } from "antd"
import { useState } from "react"
import { FormSubmit } from "../../components/core/form/formSubmit";
import BaseFormInput from "../../components/core/input/formInput";
import UpLoadFile from "../../components/core/input/uploadFile";
import { configProduct } from "../../api/product.api";

export const FormProduct: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues);
    const onchange = (e: any, v: any) => {
        setInitialValue(initialValue)
    }
    return (
        <FormSubmit
            initialValues={initialValue}
            onchange={onchange}
            configUrl={configProduct}
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
                    <BaseFormInput type="input" label="Tên món ăn" name="name" required/>
                </Col>
                <Col span={8}>
                    <BaseFormInput type="input" label="Đơn vị" name="unit" required/>
                </Col>
                <Col span={8} >
                    <BaseFormInput type="switch" label="Trạng thái" name="status" />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="input" label="Giá" name="price" />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="input" label="Số lượng" name="quantity" />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="input" label="Khối lượng Kcalo" name="kcalo" required/>
                </Col>
                <Col span={8}>
                    <BaseFormInput type="input" label="Định lượng sống" name="quantity" required/>
                </Col>
                <Col span={8}>
                    <BaseFormInput type="input" label="Định lượng chín" name="afterQuantity" required/>
                </Col>
                {/* <Col span={8}>
                    <BaseFormInput type="date" label="Ngày áp dụng" name="applyDate" />
                </Col> */}
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
