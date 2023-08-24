import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { FormSchoolPartner } from './form.school.partner';
import { configParnerSchool } from '../../../api/partner.api';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function AddPartnerSchool() {
    const navigate = useNavigate()
    const { state } = useLocation()

    return (
        <AddFormStyle>
            <Card
                title=" + Thêm mới trường"
                extra={
                    < p onClick={() => navigate(configParnerSchool.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormSchoolPartner type={state.type} />
            </Card>
        </AddFormStyle>
    )
}