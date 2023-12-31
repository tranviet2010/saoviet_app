
import { Button, Col, Divider, Form, Input, Row, Select, Space } from "antd"
import { useEffect, useRef, useState } from "react"
import { FormSubmit } from "../../../components/core/form/formSubmit";
import BaseFormInput, { FormInputStyle } from "../../../components/core/input/formInput";
import { configDetailMenu } from "../../../api/menu.api";
import { PlusOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import type { InputRef } from 'antd';
import { addProduct } from "../../../api/product.api";
import { fetchUserById } from "../../../stores/param";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../stores";

const { Option, OptGroup } = Select;

export const FormDetailManageMenu: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues);
    const [school, setSchool] = useState();
    const dataGroups = useSelector((state: any) => state.usersSlice.param).product;
    const dataMenu = useSelector((state: any) => state.usersSlice.param).menu;
    const menuConfig = dataMenu?.filter((val: any) => val.rootId != undefined && val.partnerId == school)
    console.log("menuConfig", menuConfig);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [name, setName] = useState('');
    const [nameSave, setNameSave] = useState('');

    const dispatch = useDispatch<AppDispatch>();
    const inputRef = useRef<InputRef>(null);

    const onchange = () => {
        setInitialValue({
            code: "ABC"
        })
    }
    const addItem = () => {
        setDropdownVisible(false)
        inputRef.current?.focus();
        addProduct({ name: name }).then((res) => {
            setName('')
            dispatch(fetchUserById())
        })
    }
    useEffect(() => {
        let getId = dataGroups?.filter((val: any) => val.name == nameSave)[0]?.autoid;
        nameSave.length != 0 && setInitialValue({
            ...initialValue,
            productId: getId
        })
    }, [dispatch, dataGroups])

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
                        <BaseFormInput label="Chọn trường" name="partnerId" type="option" typeParam="school" onChange={(e: any) => setSchool(e)} />
                    </Col>
                    <Col span={8}>
                        <BaseFormInput getId label="Chọn thực đơn" name="menuId" type="option" data={menuConfig} />
                        {/* <FormInputStyle>
                            
                            <Form.Item name="menuId" label="Chọn thực đơn">
                                <Select showSearch optionFilterProp="children" placeholder="Chọn lựa chọn" className="custom-select">
                                    {menuConfig?.map((group: any) => {
                                        return (
                                            group.children ? <>
                                                <p style={{ pointerEvents: "none", userSelect: "none", cursor: "default" }}>{group.name}</p>
                                                {group?.children?.map((option: any) => (
                                                    <Option key={option.id} value={option.id} style={{ marginLeft: "2rem" }}>
                                                        {option.name}
                                                    </Option>

                                                ))}
                                            </> : <Option key={group.id} value={group.id}>
                                                {group.name}
                                            </Option>


                                        )
                                    }
                                    )}
                                </Select>
                            </Form.Item>
                        </FormInputStyle> */}
                    </Col>
                    <Col span={8}>
                        <BaseFormInput label="Trạng thái" name="status" type="switch" />
                    </Col>
                    <Col span={8}>
                        <BaseFormInput label="Chọn món" name="productId" type="option" placeholder="Chọn món" typeParam="product" required message="Vui lòng chọn món" />
                        {/* <FormInputStyle>
                            <Form.Item name="productId" label="Chọn món">
                                <Select allowClear placeholder="Chọn món" open={dropdownVisible} onDropdownVisibleChange={(visible) => setDropdownVisible(visible)}
                                    dropdownRender={(menu) => (
                                        <>
                                            {menu}
                                            {
                                                dropdownVisible && (<><Divider style={{ margin: '8px 0' }} />
                                                    <Space style={{ padding: '0 8px 4px' }}>
                                                        <Input placeholder="Thêm món ăn" ref={inputRef} value={name} onChange={(event: any) => {
                                                            setName(event.target.value)
                                                            setNameSave(event.target.value)
                                                        }} />
                                                        <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                                                            Thêm
                                                        </Button>
                                                    </Space> </>)
                                            }
                                        </>
                                    )}

                                >
                                    {dataGroups?.map((val: any) => <Select.Option value={val?.autoid}>{val?.name}</Select.Option>)}
                                </Select>
                            </Form.Item>
                        </FormInputStyle> */}
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
