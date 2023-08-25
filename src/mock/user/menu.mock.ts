import type { MenuList } from '../../interface/layout/menu.interface';


export const mockMenuList: MenuList = [
  {
    code: 'ManageMenu',
    label: {
      en_US: 'Thực đơn',
    },
    icon: 'permission',
    path: '/menu',
    children: [
      {
        code: 'orderPlus',
        label: {
          en_US: 'Quản lý thực đơn',
        },
        path: '/menu/manageMenu',
      },
      {
        code: 'progressManage',
        label: {
          en_US: 'Quản lý chi tiết thực đơn',
        },
        path: '/menu/manageDetailMenu',
      }
    ],
  },
  {
    code: 'partner',
    label: {
      en_US: 'Quản lý đối tác',
    },
    icon: 'permission',
    path: '/partner',
    children: [
      {
        code: 'accountAdmin',
        label: {
          en_US: 'Quản lý trường',
        },
        path: '/partner/school',
      },
      {
        code: 'accountClient',
        label: {
          en_US: 'Quản lý lớp',
        },
        path: '/partner/class',
      },
    ],
  },

  {
    code: 'customer',
    label: {
      en_US: 'Quản lý người dùng',
    },
    icon: 'permission',
    path: '/customer',
  },
  // {
  //   code: 'ManageMenu',
  //   label: {
  //     en_US: 'Quản lý comment',
  //   },
  //   icon: 'permission',
  //   path: '/manageMenu3.1',
  // },
  // {
  //   code: 'ManageMenu',
  //   label: {
  //     en_US: 'Quản lý tin nhắn',
  //   },
  //   icon: 'permission',
  //   path: '/manageMenu3.2',
  // },
  // {
  //   code: 'ManageMenu',
  //   label: {
  //     en_US: 'Quản lý suất ăn',
  //   },
  //   icon: 'permission',
  //   path: '/manageMenu3.3',
  // },
  {
    code: 'bannner',
    label: {
      en_US: 'Quản lý banner',
    },
    icon: 'permission',
    path: '/banner',
  },
  // {
  //   code: 'report',
  //   label: {
  //     zh_CN: '',
  //     en_US: 'Báo cáo',
  //   },
  //   icon: 'permission',
  //   path: '/accoutManage4',
  //   children: [
  //     {
  //       code: 'accountAdmin',
  //       label: {
  //         zh_CN: '',
  //         en_US: 'Thống kê',
  //       },
  //       path: '/accoutManage/accountAdmin4',
  //     },
  //     {
  //       code: 'accountClient',
  //       label: {
  //         zh_CN: '',
  //         en_US: 'Báo cáo suất ăn',
  //       },
  //       path: '/accoutManage/accountClient4',
  //     },
  //   ],
  // },




];



// mock.mock('/user/menu', 'get', intercepter(mockMenuList));
