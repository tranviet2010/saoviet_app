import { Modal } from 'antd';
import { styled } from "styled-components";
import { MainColor } from '../variable/variable';

export const ModalCoreStyle = styled(Modal)`
        font-size: 16px;
        .ant-modal-content {
            padding: 0px !important;
            display: flex;
            flex-direction: column;
            height: 45rem;
        }

        .ant-modal-header {
            background-color: ${MainColor} !important;
            padding: 13px;
        }

        .ant-modal-title {
            color: #fff;
            text-transform: uppercase;
        }

        span.anticon.anticon-close.ant-modal-close-icon {
            color: #fff;
            font-size: 20px;
        }
        .ant-modal-body {
            padding: 1.5rem;
            overflow-y:auto;
        }

        .ant-modal-footer {
            padding: 13px;
        }
        .ant-modal-title{
            color: #fff !important;
        }
`

export const ModalHeight = styled(Modal)`
        font-size: 16px;
        .ant-modal-content {
            padding: 0px !important;
            display: flex;
            flex-direction: column;
        }

        .ant-modal-header {
            background-color: ${MainColor} !important;
            padding: 13px;
        }

        .ant-modal-title {
            color: #fff;
            text-transform: uppercase;
        }

        span.anticon.anticon-close.ant-modal-close-icon {
            color: #fff;
            font-size: 20px;
        }
        .ant-modal-body {
            padding: 1.5rem;
            overflow-y:auto;
        }

        .ant-modal-footer {
            padding: 13px;
        }
        .ant-modal-title{
            color: #fff !important;
        }
`