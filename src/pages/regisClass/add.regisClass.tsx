import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { FormRegisClass } from './form.regisClass';
import { configRegisClass } from '../../api/regisClass';

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
                title=" + Thêm mới đăng ký"
                extra={
                    < p onClick={() => navigate(configRegisClass.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormRegisClass type={state.type} />
            </Card>
        </AddFormStyle>
    )
}