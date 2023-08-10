import type { MenuList } from '../../interface/layout/menu.interface';
import type { FC } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

interface MenuProps {
  menuList: MenuList;
  openKey?: string;
  onChangeOpenKey: (key?: string) => void;
  selectedKey: string;
  onChangeSelectedKey: (key: string) => void;
}

const MenuComponent: FC<MenuProps> = props => {
  const { menuList, openKey, onChangeOpenKey, selectedKey, onChangeSelectedKey } = props;
  const locale  =  "en_US"
  const navigate = useNavigate();
  const getTitle = (menu: MenuList[0]) => {
    return (
      <span style={{ display: 'flex', alignItems: 'center' }}>
        {/* <CustomIcon type={menu.icon!} /> */}
        <span>{menu.label[locale]}</span>
      </span>
    );
  };

  const onMenuClick = (path: string) => {
    onChangeSelectedKey(path);
    navigate(path);

    // if (device !== 'DESKTOP') {
    //   dispatch(setUserItem({ collapsed: true }));
    // }
  };

  const onOpenChange = (keys: string[]) => {
    const key = keys.pop();

    onChangeOpenKey(key);
  };

  return (
    <Menu
      mode="inline"
      selectedKeys={[selectedKey]}
      openKeys={openKey ? [openKey] : []}
      onOpenChange={onOpenChange}
      onSelect={k => onMenuClick(k.key)}
      className="layout-page-sider-menu text-2"
      items={menuList.map(menu => {
        return menu.children
          ? {
            key: menu.code,
            label: getTitle(menu),
            children: menu.children.map(child => ({
              key: child.path,
              label: child.label[locale],
            })),
          }
          : {
            key: menu.path,
            label: getTitle(menu),
          };
      })}
    ></Menu>
  );
};

export default MenuComponent;
