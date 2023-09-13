import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { convertStatus, convertStatusBoole } from '../../../utils/convertData';
import { configParnerClass } from '../../../api/partner.api';
import { FormClassPartner } from './form.class.partner';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function EditClass() {
    const navigate = useNavigate()
    const { state } = useLocation()
    const dataInfoNavigate: any = state?.data
    const initialValues = {
        ...dataInfoNavigate,
        status: convertStatusBoole(dataInfoNavigate?.status),
    }
    return (
        <AddFormStyle>
            <Card
                title="Sửa Lớp"
                extra={
                    < p onClick={() => navigate(configParnerClass.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormClassPartner initialValues={initialValues} />
            </Card>
        </AddFormStyle>
    )
}