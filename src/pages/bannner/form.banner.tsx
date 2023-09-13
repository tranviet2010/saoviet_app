
import { Col, Form, Row } from "antd"
import { useEffect, useState } from "react"
import { FormSubmit } from "../../components/core/form/formSubmit";
import BaseFormInput from "../../components/core/input/formInput";
import UpLoadFile from "../../components/core/input/uploadFile";
import { configBanner } from "../../api/banner.api";

export const FormBanner: React.FC<any> = ({ initialValues, type }) => {
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
            configUrl={configBanner}
            type={type}
        >
            <Row gutter={16}>
                <Col span={8}>
                    <BaseFormInput type="input" placeholder="Nhập tiêu đề" name="title" label="Tiêu đề" required />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="option" placeholder="Chọn kiểu" name="type" label="Kiểu" typeParam="BANNER" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="switch" placeholder="" label="Trạng thái" name="status" />
                </Col>
                <Col span={24} >
                    <UpLoadFile onchange={(e: any) => setInitialValue({ ...initialValue, largeImage: e && e[0] })} image_url={initialValue?.largeImage} title="Ảnh lớn" />
                </Col>
                <Col span={24} >
                    <UpLoadFile onchange={(e: any) => setInitialValue({ ...initialValue, smallImage: e[0] })} image_url={initialValue?.smallImage} title="Ảnh nhỏ" />
                </Col>
            </Row>

        </FormSubmit>
    )
}
