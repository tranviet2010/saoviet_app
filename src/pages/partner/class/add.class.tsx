import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { configParnerClass, configParnerSchool } from '../../../api/partner.api';
import { FormClassPartner } from './form.class.partner';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function AddPartnerClass() {
    const navigate = useNavigate()
    const { state } = useLocation()

    return (
        <AddFormStyle>
            <Card
                title=" + Thêm mới lớp"
                extra={
                    < p onClick={() => navigate(configParnerClass.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormClassPartner type={state.type} />
            </Card>
        </AddFormStyle>
    )
}