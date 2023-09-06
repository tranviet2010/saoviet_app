import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { FormSchoolPartner } from './form.school.partner';
import { convertStatus, convertStatusBoole } from '../../../utils/convertData';
import { configParnerSchool } from '../../../api/partner.api';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function EditSchool() {
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
        title="Sửa trường"
        extra={
          < p onClick={() => navigate(configParnerSchool.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
        }
      >
        <FormSchoolPartner  initialValues={initialValues} />
      </Card>
    </AddFormStyle>
  )
}