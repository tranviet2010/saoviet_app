import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { convertStatus, convertStatusBoole } from '../../../utils/convertData';
import { configDetailMenu, configManageMenu } from '../../../api/menu.api';
import moment from 'moment';
import { FormDetailManageMenu } from './formDetailMenu';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function EditManageMenu() {
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
                title="Sửa chi tiết menu"
                extra={
                    < p onClick={() => navigate(configDetailMenu.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormDetailManageMenu initialValues={initialValues} />
            </Card>
        </AddFormStyle>
    )
}