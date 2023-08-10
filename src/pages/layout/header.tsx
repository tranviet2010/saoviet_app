import type { FC } from 'react';

import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Layout, theme as antTheme, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




const { Header } = Layout;

interface HeaderProps {
    collapsed: boolean;
    toggle: () => void;
}

type Action = 'userInfo' | 'userSetting' | 'logout';

const HeaderComponent: FC<HeaderProps> = ({ collapsed, toggle }) => {
    const navigate = useNavigate();
    const token = antTheme.useToken();
    const device: any = "Desktop";
    const logged = true;


    const onActionClick = async (action: Action) => {
        switch (action) {
            case 'userInfo':
                return;
            case 'userSetting':
                return;
            case 'logout':
                // const res = Boolean(await dispatch(logoutAsync()));
                localStorage.removeItem("token");
                navigate('/login');

                return;
        }
    };

    const toLogin = () => {
        navigate('/login');
    };


    return (
        <Header className="layout-page-header bg-2" style={{ backgroundColor: token.token.colorBgContainer }}>
            {device !== 'MOBILE' && (
                <div className="logo" style={{ width: collapsed ? 80 : 200 }}>
                    <img src={""} alt="" style={{ marginRight: collapsed ? '2px' : '20px', width: "100px", height: "60px" }} />
                </div>
            )}
            <div className="layout-page-header-main">
                <div onClick={toggle}>
                    <span id="sidebar-trigger">{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
                </div>
                <div className="actions">
                    {logged ? (
                        <Dropdown
                            menu={{
                                items: [
                                    {
                                        key: '1',
                                        icon: <UserOutlined />,
                                        label: (
                                            <span onClick={() => navigate('/dashboard')}>

                                            </span>
                                        ),
                                    },
                                    {
                                        key: '2',
                                        icon: <LogoutOutlined />,
                                        label: (
                                            <span onClick={() => onActionClick('logout')}>

                                            </span>
                                        ),
                                    },
                                ],
                            }}
                        >
                            <span className="user-action">
                                <img src={""} className="user-avator" alt="avator" />
                            </span>
                        </Dropdown>
                    ) : (
                        <span style={{ cursor: 'pointer' }} onClick={toLogin}>

                        </span>
                    )}
                </div>
            </div>
        </Header>
    );
};

export default HeaderComponent;
