
import { Button, Col, Divider, Form, Input, Row, Select, Space } from "antd"
import { useRef, useState } from "react"
import { FormSubmit } from "../../../components/core/form/formSubmit";
import BaseFormInput, { FormInputStyle } from "../../../components/core/input/formInput";
import UpLoadFileMain from "../../../components/core/input/uploadFile";
import { configDetailMenu } from "../../../api/menu.api";
import { PlusOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import ModalCore from "../../../components/core/modal/modalCore";
import type { InputRef } from 'antd';
import { addProduct } from "../../../api/product.api";
import { fetchUserById } from "../../../stores/param";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../stores";

export const FormDetailManageMenu: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues);
    const dataGroups = useSelector((state: any) => state.usersSlice.param).product;
    const [name, setName] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const inputRef = useRef<InputRef>(null);

    const onchange = () => {
        setInitialValue({
            code: "ABC"
        })
    }
    const addItem = () => {
        addProduct({ name: name }).then((res) => {
            setName('')
            dispatch(fetchUserById())
        })
    }
    return (
        <>
            <FormSubmit
                initialValues={initialValue}
                // onchange={onchange}
                // urlRequest={UrlAccount.urlPost}
                configUrl={configDetailMenu}
                type={type}
            >
                <Row gutter={16}>
                    <Col span={8}>
                        <BaseFormInput label="Chọn thực đơn" name="menuId" type="option" placeholder="Chọn thực đơn" typeParam="menu" required message="Vui lòng chọn thực đơn " />
                    </Col>
                    <Col span={8}>
                        {/* <BaseFormInput label="Chọn món" name="productId" type="option" placeholder="Chọn món" typeParam="product" required message="Vui lòng chọn món"/> */}
                        <FormInputStyle>
                            <Form.Item name="promotional_group_id" label="Chọn món">
                                <Select allowClear placeholder="Chọn món"

                                    dropdownRender={(menu) => (
                                        <>
                                            {menu}
                                            <Divider style={{ margin: '8px 0' }} />
                                            <Space style={{ padding: '0 8px 4px' }}>
                                                <Input placeholder="Thêm món ăn" ref={inputRef} value={name} onChange={(event: any) => setName(event.target.value)} />
                                                <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                                                    Thêm
                                                </Button>
                                            </Space>
                                        </>
                                    )}

                                >
                                    {dataGroups?.map((val: any) => <Select.Option value={val?.autoid}>{val?.name}</Select.Option>)}
                                </Select>
                            </Form.Item>
                        </FormInputStyle>
                    </Col>
                    <Col span={8}>
                        <BaseFormInput label="Trạng thái" name="status" type="switch" />
                    </Col>
                    <Col span={8}>
                        <BaseFormInput label="Số thứ tự" name="ord" type="input" placeholder="Nhập số thứ tự" />
                    </Col>

                </Row>
                {/* <Row>
                <Col>
                    <UpLoadFileMain onchange={(e: any) => setInitialValue({ ...initialValues, image_url: e })} image_url={initialValue?.image_url} />
                </Col>
            </Row> */}
            </FormSubmit>
        </>
    )
}
