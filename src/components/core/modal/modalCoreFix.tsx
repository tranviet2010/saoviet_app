import React, { ReactNode, useState } from 'react';
import { useSelector } from 'react-redux';
import { ButtonCore } from '../button/buttonCore';
import { ModalCoreStyle, ModalHeight } from './modalCoreStyled';
import { modalFalse, modalTrue, setModalFalse, setModalTrue } from '../../../stores/global.store';
import store from '../../../stores';
import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import styled from 'styled-components';


const ModalStyle = styled.div`
    z-index: 1000;
`

export interface ModalCore {
    nameButton?: string | number;
    title?: string;
    children?: ReactNode
    status?: boolean
    width?: number
    modalHeight?: boolean
}

const ModalCoreFix: React.FC<ModalCore> = ({ nameButton, title, children, status, width, modalHeight }) => {
    const statusModal = useSelector((state: any) => state.global.modal);

    const showModal = () => {
        store.dispatch(modalTrue());
        // setIsModalOpen(true);
    }
    const handleOk = () => {
        store.dispatch(modalFalse());
        // setIsModalOpen(false);
    }
    const handleCancel = () => {
        store.dispatch(modalFalse());
        // setIsModalOpen(false);
    }
    return (
        <>
            {
                modalHeight ?
                    <ModalHeight title={title} open={statusModal} onOk={handleOk} onCancel={handleCancel} footer={false} width={width}>
                        {children}
                    </ModalHeight>
                    :
                    <ModalCoreStyle title={title} open={statusModal} onOk={handleOk} onCancel={handleCancel} footer={false} width={width}>
                        {children}
                    </ModalCoreStyle>
            }
        </>
    );
}

export default ModalCoreFix;
