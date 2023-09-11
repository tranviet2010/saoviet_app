import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { configCustomer } from '../../api/comment.api';
import { FormCustom } from './form.customer';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function AddCustomer() {
    const navigate = useNavigate()
    const { state } = useLocation()

    return (
        <AddFormStyle>
            <Card
                title=" + Thêm mới lớp"
                extra={
                    < p onClick={() => navigate(configCustomer.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormCustom type={state.type} />
            </Card>
        </AddFormStyle>
    )
}