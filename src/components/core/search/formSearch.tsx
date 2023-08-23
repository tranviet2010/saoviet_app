import { Card, Col, Form, Row } from "antd";
import styled from "styled-components";
import BaseFormInput from "../input/formInput";
import { ButtonCore } from "../button/buttonCore";
import { useNavigate } from 'react-router-dom'

const FormSearch = ({ nameButtonModal,children,onSearch }: any) => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const onFinish = (values:any) => {
        onSearch(values)
    }
    return (
        <Card>
            <Form name="dynamic_form_nest_item" form={form} onFinish={onFinish} autoComplete="off" >
                <Row gutter={16} justify={"center"}>
                    {children}
                    <Col span={4}>
                        <BaseFormInput
                            type="date"
                            placeholder="Từ ngày"
                        />
                    </Col>
                    <Col span={4}>
                        <BaseFormInput
                            type="date"
                            placeholder="Đến ngày"
                        />
                    </Col>
                </Row>
                <Row justify={"center"}>
                    <Col span={4}>
                        <ButtonCore >Tìm kiếm</ButtonCore>
                        <ButtonCore type="button"
                            onClick={() =>
                                navigate('add', {
                                    state: {
                                        type: 'add',
                                    },
                                })
                            }
                        >{`+ ${nameButtonModal || 'Thêm mới'}`}</ButtonCore>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};

export default FormSearch;
