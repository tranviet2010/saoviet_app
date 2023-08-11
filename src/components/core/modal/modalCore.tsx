import React, { ReactNode, useState } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
    ImportOutlined
} from '@ant-design/icons';
import { ButtonCore } from '../button/buttonCore';
import { ModalCoreStyle } from './modalCoreStyled';


export interface ModalCore {
    nameButton?: string | number;
    title?: string;
    children?: ReactNode
    status?: boolean
    width?: number
}

const ModalCore: React.FC<ModalCore> = ({ nameButton, title, children, status, width }) => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {

        setIsModalOpen(true);
    };
    const handleOk = () => {

        setIsModalOpen(false);
    };
    const handleCancel = () => {

        setIsModalOpen(false);
    };
    return (
        <>
            <ButtonCore onClick={showModal}>+ {nameButton}</ButtonCore>
            <ModalCoreStyle title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false} width={width}>
                {children}
            </ModalCoreStyle>
        </>
    );
};

export default ModalCore;
