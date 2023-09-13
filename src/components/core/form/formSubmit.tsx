
import { Col, Form, Row } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Notifi from '../noti';
import { ButtonCore } from '../button/buttonCore';
import { addError, addSucc, updateError, updateSucc } from '../../../utils/textUnits';
import { addFormData, editFormRequest } from '../../../api/request';
import TextArea from 'antd/es/input/TextArea';
import { getTimeUnix } from '../../../utils/convertData';

export const FormSubmit = ({ type, initialValues, children, onchange, configUrl }: any) => {
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        let configValue = {
            ...initialValues,
            ...values,
            applyDate: getTimeUnix(values?.applyDate),
            status: values.status ? 1 : 0,
            parentId: values.ord,
            rootId: values.ord
        }
        if (type == "add") {
            addFormData(configUrl?.urlAdd, configValue).then((res: any) => {
                if (res?.status == 200) {
                    Notifi("succ", addSucc)
                    form.resetFields();
                    navigate(configUrl?.navigate)
                } else {
                    Notifi("error", addError)
                }
            })
        }
        else {
            editFormRequest(configUrl?.urlEdit, configValue).then((res: any) => {
                if (res?.status == 200) {
                    Notifi("succ", updateSucc)
                    form.resetFields();
                    navigate(configUrl?.navigate)
                } else {
                    Notifi("error", updateError)
                }
            })
        }
    }

    const handleFormValuesChange = async (changed: any, allValue: any) => {
        await onchange && onchange(allValue, changed)
    }
    useEffect(() => {
        form.setFieldsValue(initialValues)
    }, [form, initialValues])

    return (
        <Form
            name="dynamic_form_nest_item"
            form={form}
            onFinish={onFinish}
            initialValues={initialValues}
            autoComplete="on"
            onValuesChange={handleFormValuesChange}
        >
            {children}
            <Col span={24}>
                <Form.Item label="" name="description">
                    <TextArea rows={7} placeholder="Ghi chú " maxLength={244} />
                </Form.Item>
            </Col>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <ButtonCore>{type == 'add' ? 'Thêm mới' : 'Cập nhật'}</ButtonCore>
            </Row>
        </Form>
    );
};
