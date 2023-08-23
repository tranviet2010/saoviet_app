import type { FC } from 'react';

import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Layout, theme as antTheme, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import logo from '../../asset/logo.webp'

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
    }

    return (
        <Header className="layout-page-header bg-2" style={{ backgroundColor: token.token.colorBgContainer }}>
            {device !== 'MOBILE' && (
                <div className="logo" style={{ width: collapsed ? 80 : 200 }}>
                    {/* <img src={logo} alt="" style={{ marginRight: collapsed ? '2px' : '20px', width: "100px", height: "60px" }} /> */}
                </div>
            )}
            <div className="layout-page-header-main" style={{
                display: "flex",
                justifyContent: "end"
            }}>
                <div onClick={toggle}>
                    {/* <span id="sidebar-trigger">{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span> */}
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
                                               Tài khoản
                                            </span>
                                        ),
                                    },
                                    {
                                        key: '2',
                                        icon: <LogoutOutlined />,
                                        label: (
                                            <span onClick={() => onActionClick('logout')}>
                                                Đăng xuất
                                            </span>
                                        ),
                                    },
                                ],
                            }}
                        >
                            <p style={{border:"1px solid black",height:"45px",borderRadius:"50px",width:"45px",textAlign:"center",cursor:"pointer" }}>
                                <img src={"http://www.rw-designer.com/icon-image/21544-255x256x32.png"} className="user-avator" alt="avator" width={30}/>
                            </p>
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
