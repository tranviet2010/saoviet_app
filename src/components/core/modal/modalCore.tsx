import React, { ReactNode, useState } from 'react';
import { useSelector } from 'react-redux';
import { ButtonCore } from '../button/buttonCore';
import { ModalCoreStyle } from './modalCoreStyled';
import { setModalFalse, setModalTrue } from '../../../stores/global.store';
import store from '../../../stores';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

export interface ModalCore {
    nameButton?: string | number;
    title?: string;
    children?: ReactNode
    status?: boolean
    width?: number
}

const ModalCore: React.FC<ModalCore> = ({ nameButton, title, children, status, width }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
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
        <>
            {nameButton ? <ButtonCore onClick={showModal}>+ {nameButton}</ButtonCore> : <span onClick={showModal}><EditOutlined /></span>}
            <ModalCoreStyle title={title} open={statusModal} onOk={handleOk} onCancel={handleCancel} footer={false} width={width}>
                {children}
            </ModalCoreStyle>
        </>
    );
}

export default ModalCore;
