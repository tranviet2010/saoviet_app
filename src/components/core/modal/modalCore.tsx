import React, { ReactNode, useState } from 'react';
import { useSelector } from 'react-redux';
import { ButtonCore } from '../button/buttonCore';
import { ModalCoreStyle } from './modalCoreStyled';
import { setModalFalse, setModalTrue } from '../../../stores/global.store';
import store from '../../../stores';
import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';


const ModalStyle=styled.div`
    z-index: 1000;
`

export interface ModalCore {
    nameButton?: string | number;
    title?: string;
    children?: ReactNode
    status?: boolean
    width?: number
}

const ModalCore: React.FC<ModalCore> = ({ nameButton, title, children, status, width }) => {

    const [isModalOpen, setIsModalOpen] = useState(true);
    const statusModal = useSelector((state: any) => state.global.statusModal);

    const showModal = () => {
        store.dispatch(setModalTrue());
        // setIsModalOpen(true);
    }
    const handleOk = () => {
        store.dispatch(setModalFalse());
        // setIsModalOpen(false);
    }
    const handleCancel = () => {
        store.dispatch(setModalFalse());
        // setIsModalOpen(false);
    }
    return (
        <ModalStyle>
            <ModalCoreStyle title={title} open={statusModal} onOk={handleOk} onCancel={handleCancel} footer={false} width={width}>
                {children}
            </ModalCoreStyle>
        </ModalStyle>
    );
}

export default ModalCore;
