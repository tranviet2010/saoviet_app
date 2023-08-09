import type { MenuList } from '../../interface/layout/menu.interface';


export const mockMenuList: MenuList = [
  {
    code: 'order',
    label: {
      en_US: 'Đơn hàng',
    },
    icon: 'permission',
    path: '/order',
    children: [
      {
        code: 'orderPlus',
        label: {
          en_US: 'Tổng đơn hàng',
        },
        path: '/order/orderPlus',
      },
      {
        code: 'progressManage',
        label: {
          en_US: 'Xử lý bởi quản lý đơn hàng',
        },
        path: '/order/orderManager',
      },
      {
        code: 'progressAdvise',
        label: {
          en_US: 'Xử lý bởi tư vấn',
        },
        path: '/order/orderAdvise',
      },
      {
        code: 'progressTrans',
        label: {
          en_US: 'Xử lý bởi vận chuyển',
        },
        path: '/order/orderTransport',
      },
      {
        code: 'progressTech',
        label: {
          en_US: 'Xử lý bởi kỹ thuật',
        },
        path: '/order/orderTech',
      },
    ],
  },
  {
    code: 'accoutManage',
    label: {
      zh_CN: '',
      en_US: 'Quản lý tài khoản',
    },
    icon: 'permission',
    path: '/accoutManage',
    children: [
      {
        code: 'accountAdmin',
        label: {
          zh_CN: '',
          en_US: 'Danh sách nhân viên',
        },
        path: '/accoutManage/accountAdmin',
      },
      {
        code: 'accountClient',
        label: {
          zh_CN: '',
          en_US: 'Danh sách người dùng',
        },
        path: '/accoutManage/accountClient',
      },
    ],
  },
];



// mock.mock('/user/menu', 'get', intercepter(mockMenuList));
