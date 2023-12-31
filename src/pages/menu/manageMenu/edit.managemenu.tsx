import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { convertStatus, convertStatusBoole } from '../../../utils/convertData';
import { configManageMenu } from '../../../api/menu.api';
import { FormManageMenu } from './formManagemenu';
import moment from 'moment';
import dayjs from 'dayjs';

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
        applyDate: dayjs(dataInfoNavigate?.applyDate),
        autoid: dataInfoNavigate?.id
    }
    return (
        <AddFormStyle>
            <Card
                title="Sửa menu"
                extra={
                    <p onClick={() => navigate(configManageMenu.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormManageMenu initialValues={initialValues} />
            </Card>
        </AddFormStyle>
    )
}