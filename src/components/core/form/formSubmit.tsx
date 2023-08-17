
import { Form, Row } from 'antd';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Notifi from '../noti';
import { ButtonCore } from '../button/buttonCore';
import { addError, addSucc, updateError, updateSucc } from '../../../utils/textUnits';

export const FormSubmit = ({ type, id, initialValues, children, onchange, typeservice, urlRequest, urlBack }: any) => {
    const [form] = Form.useForm()
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        let configValue = {
            ...values,
            ...initialValues
        }
        if (type == "add") {
            // addFormRequest(urlRequest, configValue).then((res: any) => {
            //     if (res?.code == 200) {
            //         Notifi("succ", addSucc)
            //         form.resetFields();
            //         navigate(urlBack)
            //     } else {
            //         Notifi("error", addError)
            //     }
            // })
        }
        else {
            let urlEdit = urlRequest + "/" + id
            // editFormRequest(urlEdit, configValue).then((res: any) => {
            //     if (res?.code == 200) {
            //         Notifi("succ", updateSucc)
            //         form.resetFields();
            //         navigate(urlBack)
            //     } else {
            //         Notifi("error", updateError)
            //     }
            // })
        }
    }

    const handleFormValuesChange = async (changed: any, allValue: any) => {
        await onchange(allValue, changed);
    };


    useEffect(() => {
        form.setFieldsValue(initialValues);
    }, [form, initialValues]);

    return (
        <Form
            name="dynamic_form_nest_item"
            form={form}
            onFinish={onFinish}
            initialValues={initialValues}
            autoComplete="off"
            onValuesChange={handleFormValuesChange}
        >
            {children}
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <ButtonCore>{type == 'add' ? 'Thêm mới' : 'Cập nhật'}</ButtonCore>
            </Row>
        </Form>
    );
};
