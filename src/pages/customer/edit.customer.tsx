import { Card } from 'antd';
import styled from "styled-components"
import { configBanner } from '../../api/banner.api';
import { useLocation, useNavigate } from 'react-router-dom';
import { convertStatusBoole } from '../../utils/convertData';
import { configCustome } from '../../api/custom.api';
import { FormCustom } from './form.customer';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function EditCustom() {
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
                title="Sửa Thông Tin Khách Hàng"
                extra={
                    < p onClick={() => navigate(configCustome.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormCustom initialValues={initialValues} />
            </Card>
        </AddFormStyle>
    )
}