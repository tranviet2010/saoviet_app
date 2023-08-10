import type { MenuList } from '../../interface/layout/menu.interface';


export const mockMenuList: MenuList = [
  {
    code: 'ManageMenu',
    label: {
      en_US: 'Thực đơn',
    },
    icon: 'permission',
    path: '/manageMenu',
    children: [
      {
        code: 'orderPlus',
        label: {
          en_US: 'Quản lý thực đơn',
        },
        path: '/order/orderPlus',
      },
      {
        code: 'progressManage',
        label: {
          en_US: 'Quản lý chi tiết thực đơn',
        },
        path: '/order/orderManager',
      }
    ],
  },
  

  {
    code: 'accoutManage',
    label: {
      zh_CN: '',
      en_US: 'Quản lý đối tác',
    },
    icon: 'permission',
    path: '/accoutManage',
    children: [
      {
        code: 'accountAdmin',
        label: {
          zh_CN: '',
          en_US: 'Quản lý trường',
        },
        path: '/accoutManage/accountAdmin',
      },
      {
        code: 'accountClient',
        label: {
          zh_CN: '',
          en_US: 'Quản lý lớp',
        },
        path: '/accoutManage/accountClient',
      },
    ],
  },

  {
    code: 'ManageMenu',
    label: {
      en_US: 'Quản lý người dùng',
    },
    icon: 'permission',
    path: '/manageMenu',
  },
  {
    code: 'ManageMenu',
    label: {
      en_US: 'Quản lý comment',
    },
    icon: 'permission',
    path: '/manageMenu',
  },
  {
    code: 'ManageMenu',
    label: {
      en_US: 'Quản lý tin nhắn',
    },
    icon: 'permission',
    path: '/manageMenu',
  },
  {
    code: 'ManageMenu',
    label: {
      en_US: 'Quản lý suất ăn',
    },
    icon: 'permission',
    path: '/manageMenu',
  },

  {
    code: 'report',
    label: {
      zh_CN: '',
      en_US: 'Báo cáo',
    },
    icon: 'permission',
    path: '/accoutManage',
    children: [
      {
        code: 'accountAdmin',
        label: {
          zh_CN: '',
          en_US: 'Thống kê',
        },
        path: '/accoutManage/accountAdmin',
      },
      {
        code: 'accountClient',
        label: {
          zh_CN: '',
          en_US: 'Báo cáo suất ăn',
        },
        path: '/accoutManage/accountClient',
      },
    ],
  },




];



// mock.mock('/user/menu', 'get', intercepter(mockMenuList));
