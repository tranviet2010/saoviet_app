import { Card } from 'antd';
import styled from "styled-components"
import { configBanner } from '../../api/banner.api';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormBanner } from './form.banner';
import { convertStatusBoole } from '../../utils/convertData';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function EditBanner() {
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
        title="Sửa banner"
        extra={
          < p onClick={() => navigate(configBanner.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
        }
      >
        <FormBanner initialValues={initialValues} />
      </Card>
    </AddFormStyle>
  )
}