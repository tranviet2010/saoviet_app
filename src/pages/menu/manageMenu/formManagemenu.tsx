
import { Col, Form, Row } from "antd"
import { useState } from "react"
import BaseFormInput from "../../../components/core/input/formInput";
import UpLoadFile from "../../../components/core/input/uploadFile";
import { useSelector } from "react-redux";
import { ButtonCore } from "../../../components/core/button/buttonCore";
import TextArea from "antd/es/input/TextArea";
import { getTimeUnix } from "../../../utils/convertData";
import { addFormData, editFormRequest } from "../../../api/request";
import Notifi from "../../../components/core/noti";
import { addError, addSucc, updateError, updateSucc } from "../../../utils/textUnits";
import { useNavigate } from "react-router-dom";

export const FormManageMenu: React.FC<any> = ({ initialValues, type }) => {
    const [initialValue, setInitialValue] = useState<any>(initialValues);
    const [dataRoot, setDataRoot] = useState<any>();
    const dataMenu = useSelector((state: any) => state.usersSlice.param).menu?.filter((val: any) => val?.rootId == undefined)
    const [form] = Form.useForm()
    const navigate = useNavigate();


    const chonseSchool = (e: any) => {
        const dataCof = dataMenu?.filter((val: any) => val.partnerId == e)
        const dataRootId = dataCof?.map((val: any) => ({ autoid: val.id, value: val.name }))
        setDataRoot(dataRootId)
    }
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
            const convertConfigValue = Object.fromEntries(
                Object.entries(configValue).filter(([key, value]) => value !== undefined && key != 'id')
            );
            addFormData("menu", convertConfigValue).then((res: any) => {
                if (res?.status == 200) {
                    Notifi("succ", addSucc)
                    form.resetFields();
                    navigate('/menu/manageMenu')
                } else {
                    Notifi("error", addError)
                }
            })
        }
        else {
            editFormRequest('menu', configValue).then((res: any) => {
                if (res?.status == 200) {
                    Notifi("succ", updateSucc)
                    form.resetFields();
                    navigate('/menu/manageMenu')
                } else {
                    Notifi("error", updateError)
                }
            })
        }
    }

    return (
        <Form
            name="dynamic_form_nest_item"
            form={form}
            onFinish={onFinish}
            initialValues={initialValues}
            autoComplete="on"
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
                    <BaseFormInput type="input" label="Tên thực đơn" name="name" />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="option" label="Trường học áp dụng" name="partnerId" typeParam="school" onChange={(e: any) => chonseSchool(e)} />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="option" label="Chọn thực đơn cha" name="ord" data={dataRoot} />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="input" label="Giá tham khảo" name="price" />
                </Col>
                <Col span={8}>
                    <BaseFormInput type="date" label="Ngày áp dụng" name="applyDate" />
                </Col>
                <Col span={8} >
                    <BaseFormInput type="switch" label="Trạng thái" name="status" />
                </Col>
                {/* <Col span={8}>
                    <BaseFormInput type="date" label="Ngày tạo" name="createdAt" />
                </Col> */}
                <Col span={24}>
                    <UpLoadFile onchange={(e: any) => setInitialValue({ ...initialValue, smallImage: e[0] })} image_url={initialValue?.smallImage} title="Ảnh to" />
                </Col>
                <Col span={24}>
                    <UpLoadFile onchange={(e: any) => setInitialValue({ ...initialValue, largeImage: e[0] })} image_url={initialValue?.largeImage} title="Ảnh nhỏ" />
                </Col>
            </Row>
            <Col span={24}>
                <Form.Item label="" name="description">
                    <TextArea rows={7} placeholder="Ghi chú " maxLength={244} />
                </Form.Item>
            </Col>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <ButtonCore>{type == 'add' ? 'Thêm mới' : 'Cập nhật'}</ButtonCore>
            </Row>

        </Form>
    )
}
