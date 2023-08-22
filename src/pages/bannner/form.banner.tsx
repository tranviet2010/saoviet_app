
import { Col, Form, Row } from "antd"
import { useEffect, useState } from "react"
import { FormSubmit } from "../../components/core/form/formSubmit";
import BaseFormInput from "../../components/core/input/formInput";
import UpLoadFile from "../../components/core/input/uploadFile";
import TextArea from "antd/es/input/TextArea";
import { useSelector } from "react-redux";

export const FormBanner: React.FC<any> = ({ initialValues, type, urlAdd }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues);

    const onchange = () => {
    }
    useEffect(() => {
        setInitialValue(initialValue)
    }, [initialValues])

    console.log("initialValue222", initialValue);
    return (
        <FormSubmit
            initialValues={initialValue}
            onchange={onchange}
            urlRequest={urlAdd}
            type={type}
        >
            <Row gutter={16}>
                <Col span={8}>
                    <BaseFormInput type="input" placeholder="Nhập tiêu đề" name="title" label="Tiêu đề" required />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="option" placeholder="Chọn kiểu" name="type" label="Kiểu" data={[
                        { _id: "ADV_BANNER", name: "ADV_BANNER" },
                        { _id: "web_banner", name: "web_banner" },
                    ]}
                    />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="switch" placeholder="" label="Trạng thái" name="status" />
                </Col>
                <Col span={24} >
                    {/* <UpLoadFile onchange={(e: any) => setInitialValue({ ...initialValue, largeImage: e && e[0] })} image_url={initialValue?.largeImage} title="Ảnh lớn" /> */}
                </Col>
                <Col span={24} >
                    {/* <UpLoadFile onchange={(e: any) => setInitialValue({ ...initialValue, smallImage: e[0] })} image_url={initialValue?.smallImage} title="Ảnh nhỏ" /> */}
                </Col>

                <Col span={24}>
                    <Form.Item label="" name="desc">
                        <TextArea rows={7} placeholder="Ghi chú " maxLength={244} />
                    </Form.Item>
                </Col>
            </Row>

        </FormSubmit>
    )
}
