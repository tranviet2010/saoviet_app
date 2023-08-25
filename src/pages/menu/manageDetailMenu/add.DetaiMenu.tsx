import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { configDetailMenu } from '../../../api/menu.api';
import { FormDetailManageMenu } from './formDetailMenu';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function AddDetailMenu() {
    const navigate = useNavigate()
    const { state } = useLocation()

    return (
        <AddFormStyle>
            <Card
                title=" + Thêm mới chi tiết thực đơn"
                extra={
                    < p onClick={() => navigate(configDetailMenu.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormDetailManageMenu type={state.type} />
            </Card>
        </AddFormStyle>
    )
}