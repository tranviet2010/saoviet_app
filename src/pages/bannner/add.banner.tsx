import { Card } from 'antd';
import styled from "styled-components"
import { configBanner } from '../../api/banner.api';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormBanner } from './form.banner';
import { convertStatus } from '../../utils/convertData';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`
export default function AddBanner() {
    const navigate = useNavigate()
    const { state } = useLocation()

    return (
        <AddFormStyle>
            <Card
                title="+ Thêm mới banner"
                extra={
                    <p onClick={() => navigate(configBanner.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormBanner type={state.type} />
            </Card>
        </AddFormStyle>
    )
}