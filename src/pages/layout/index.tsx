import type { MenuChild, MenuList } from '../../interface/layout/menu.interface';
import type { FC } from 'react';
import './index.less';
import { Drawer, Layout, theme as antTheme } from 'antd';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router';
import MenuComponent from './menu';
import { mockMenuList } from '../../mock/user/menu.mock';
import HeaderComponent from './header';
const { Sider, Content } = Layout;

const LayoutPage: FC = () => {
  const location = useLocation();
  const [openKey, setOpenkey] = useState<string>();
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);
  const [menuList, setMenuList] = useState<MenuList>([]);
  const token = antTheme.useToken();
  const dispatch = useDispatch();
  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  const onChanged = (e: any) => {
    setSelectedKey(e)
  }
  const fetchMenuList = useCallback(async () => {
    setMenuList(mockMenuList);
  }, [dispatch]);

  useEffect(() => {
    fetchMenuList();
  }, [fetchMenuList]);
  const toggle = () => {

  }
  
  return (
    <Layout className="layout-page">
      {
        // LocalStorage("token") != null ?
        <>
          <HeaderComponent collapsed={true} toggle={toggle} />
          <Layout>
            {/* {!isMobile ? ( */}
            <Sider
              className="layout-page-sider"
              trigger={null}
              width={250}
              collapsible
              style={{ backgroundColor: token.token.colorBgContainer }}
              // collapsedWidth={isMobile ? 0 : 80}
              collapsed={false}
              breakpoint="md"
            >
              <MenuComponent
                menuList={menuList}
                openKey={openKey}
                onChangeOpenKey={k => setOpenkey(k)}
                selectedKey={selectedKey}
                onChangeSelectedKey={k => onChanged(k)}
              />
            </Sider>
            {/* ) : (
              <Drawer
                width="200"
                placement="left"
                bodyStyle={{ padding: 0, height: '100%' }}
                closable={false}
                onClose={toggle}
                open={!collapsed}
              >
                <MenuComponent
                  menuList={menuList}
                  openKey={openKey}
                  onChangeOpenKey={k => setOpenkey(k)}
                  selectedKey={selectedKey}
                  onChangeSelectedKey={k => setSelectedKey(k)}
                />
              </Drawer>
            )} */}
            <Content className="layout-page-content">
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </Content>
          </Layout>
        </>
      }

    </Layout>
  );
};

export default LayoutPage;
