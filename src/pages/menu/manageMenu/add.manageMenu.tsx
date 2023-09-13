import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { configManageMenu } from '../../../api/menu.api';
import { FormManageMenu } from './formManagemenu';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function AddManageMenu() {
    const navigate = useNavigate()
    const { state } = useLocation()

    return (
        <AddFormStyle>
            <Card
                title=" + Thêm mới thực đơn"
                extra={
                    < p onClick={() => navigate(configManageMenu.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormManageMenu type={state.type} />
            </Card>
        </AddFormStyle>
    )
}