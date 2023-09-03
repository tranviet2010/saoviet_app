import type { MenuList } from '../../interface/layout/menu.interface';


export const mockMenuList: MenuList = [
  // {
  //   code: 'report',
  //   label: {
  //     en_US: 'Báo cáo',
  //   },
  //   icon: 'user',
  //   path: '/report',
  // },
  {
    code: 'ManageMenu',
    label: {
      en_US: 'Thực đơn',
    },
    icon: 'menu',
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
    icon: 'manage',
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
    icon: 'user',
    path: '/customer',
  },
  {
    code: 'comment',
    label: {
      en_US: 'Quản lý comment',
    },
    icon: 'comment',
    path: '/comment',
  },
  // {
  //   code: 'ManageMenu',
  //   label: {
  //     en_US: 'Quản lý tin nhắn',
  //   },
  //   icon: 'permission',
  //   path: '/manageMenu3.2',
  // },
  {
    code: 'order',
    label: {
      en_US: 'Quản lý suất ăn',
    },
    icon: 'permission',
    path: '/order',
  },
  {
    code: 'product',
    label: {
      en_US: 'Quản lý món ăn',
    },
    icon: 'product',
    path: '/product',
  },
  {
    code: 'bannner',
    label: {
      en_US: 'Quản lý banner',
    },
    icon: 'banner',
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
