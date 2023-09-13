import { Card } from 'antd';
import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import { configProduct } from '../../api/product.api';
import { FormProduct } from './form.product';

export const AddFormStyle = styled.div`
  background-color: #fff;
  overflow: scroll;
`

export default function AddProdut() {
    const navigate = useNavigate()
    const { state } = useLocation()

    return (
        <AddFormStyle>
            <Card
                title=" + Thêm mới món ăn"
                extra={
                    < p onClick={() => navigate(configProduct.navigate)} style={{ cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>X</p>
                }
            >
                <FormProduct type={state.type} />
            </Card>
        </AddFormStyle>
    )
}