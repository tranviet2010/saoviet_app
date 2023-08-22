import React, { ReactNode, useState } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
    ImportOutlined
} from '@ant-design/icons';
import { ButtonCore } from '../button/buttonCore';
import { ModalCoreStyle } from './modalCoreStyled';
import { setModalFalse, setModalTrue } from '../../../stores/global.store';
import store from '../../../stores';


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
        setIsModalOpen(true);
    }
    const handleOk = () => {
        store.dispatch(setModalFalse());
        setIsModalOpen(false);
    }
    const handleCancel = () => {
        store.dispatch(setModalFalse());
        setIsModalOpen(false);
    }
    return (
        <>
            <ButtonCore onClick={showModal}>+ {nameButton}</ButtonCore>
            <ModalCoreStyle title={title} open={statusModal} onOk={handleOk} onCancel={handleCancel} footer={false} width={width}>
                {children}
            </ModalCoreStyle>
        </>
    );
}

export default ModalCore;
