import { Card, Col, Form, Row } from "antd";
import styled from "styled-components";
import BaseFormInput from "../input/formInput";
import { ButtonCore } from "../button/buttonCore";
import React from "react";

const FormSearch = ({ children }: any) => {
    const [form] = Form.useForm();
    const onFinish = () => {
        console.log("abc12333");
    }
    return (
        <Card>
            <Form name="dynamic_form_nest_item" form={form} onFinish={onFinish} autoComplete="off" >
                <Row gutter={16} justify={"center"}>
                    <Col span={4}>
                        <BaseFormInput
                            type="option"
                            placeholder="Trường"
                            data={[
                                { _id: 1, name: "Trường" },
                                { _id: 2, name: "Cấp" }
                            ]}
                        />
                    </Col>
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
                        {children}
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};

export default FormSearch;
