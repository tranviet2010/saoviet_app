
import { Form, Row } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Notifi from '../noti';
import { ButtonCore } from '../button/buttonCore';
import { addError, addSucc, updateError, updateSucc } from '../../../utils/textUnits';
import { addFormData, editFormRequest } from '../../../api/request';

export const FormSubmit = ({ type, id, initialValues, children, onchange, typeservice, configUrl, urlBack }: any) => {
    const [form] = Form.useForm()
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        let configValue = {
            ...values,
            ...initialValues,
            status: values.status ? 1 : 0
        }
        if (type == "add") {
            addFormData(configUrl?.urlGetInfo, configValue).then((res: any) => {
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
            console.log("configValue", configValue);
            // editFormRequest(configUrl?.urlGetInfo, configValue).then((res: any) => {
            //     console.log("res==",res);
            //     if (res?.status == 200) {
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


    // useEffect(() => {
    //     form.setFieldsValue(initialValues);
    // }, [form, initialValues]);

    return (
        <Form
            name="dynamic_form_nest_item"
            form={form}
            onFinish={onFinish}
            initialValues={initialValues}
            autoComplete="off"
            // onValuesChange={handleFormValuesChange}
        >
            {children}
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <ButtonCore>{type == 'add' ? 'Thêm mới' : 'Cập nhật'}</ButtonCore>
            </Row>
        </Form>
    );
};
