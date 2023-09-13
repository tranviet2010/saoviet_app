import type { FC } from 'react';
import type { RouteObject } from 'react-router';

import { lazy } from 'react';
import { Navigate } from 'react-router';
import { useRoutes } from 'react-router-dom';
import WrapperRouteComponent from './config';

import Dashboard from '../pages/dashboard';
import LayoutPage from '../pages/layout';
import LoginPage from '../pages/login';

const RouterManageMenu = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/menu/manageMenu/manageMenu'));
const RouterDetailManageMenu = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/menu/manageDetailMenu/detailMenu'));
const RouterEditDetailManageMenu = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/menu/manageDetailMenu/edit.DetaiMenu'))
const RouterAddDetailManageMenu = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/menu/manageDetailMenu/add.DetaiMenu'));
const RouterAddManageMenu = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/menu/manageMenu/add.manageMenu'))
const RouterEditManageMenu = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/menu/manageMenu/edit.managemenu'))

const RouterPartnerClass = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/partner/class/class.partner'));
const RouterPartnerSchool = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/partner/school/school.partner'));
const RouterAddPartnerSchool = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/partner/school/add.school'));
const RouterEditPartnerSchool = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/partner/school/edit.school'));
const RouterAddPartnerClass = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/partner/class/add.class'));
const RouterEditPartnerClass = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/partner/class/edit.class'));

const RouterBanner = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/bannner'));
const RouterBannerEdit = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/bannner/edit.banner'));
const RouterBannerAdd = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/bannner/add.banner'));

const RouterCustomer = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/customer'));
const RouterEditCustomer = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/customer/edit.customer'));
const RouterCustomerAdd = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/customer/add.customer'));

const RouterOrder = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/order'));

const RouterProduct = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/product'));
const RouterAddProduct = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/product/add.product'));
const RouterEditProduct = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/product/edit.product'));

const RouterComment = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/comment'));







const routeList: RouteObject[] = [
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <LayoutPage />,
        children: [
            {
                path: 'menu/manageDetailMenu',
                element: <RouterDetailManageMenu />,
            },
            {
                path: 'menu/manageMenu',
                element: <RouterManageMenu />,
            },
            {
                path: 'menu/manageMenu/add',
                element: <RouterAddManageMenu />,
            },
            {
                path: 'menu/manageMenu/edit',
                element: <RouterEditManageMenu />,
            },
            {
                path: 'menu/manageDetailMenu/add',
                element: <RouterAddDetailManageMenu />,
            },
            {
                path: 'menu/manageDetailMenu/edit',
                element: <RouterEditDetailManageMenu />,
            },
            {
                path: 'partner/class',
                element: <RouterPartnerClass />,
            },
            {
                path: 'partner/class/add',
                element: <RouterAddPartnerClass />,
            },
            {
                path: 'partner/class/edit',
                element: <RouterEditPartnerClass />,
            },
            {
                path: 'partner/school',
                element: <RouterPartnerSchool />,
            },
            {
                path: 'partner/school/add',
                element: <RouterAddPartnerSchool />,
            },
            {
                path: 'partner/school/edit',
                element: <RouterEditPartnerSchool />,
            },
            {
                path: 'banner',
                element: <RouterBanner />,
            },
            {
                path: 'banner/edit',
                element: <RouterBannerEdit />,
            },
            {
                path: 'banner/add',
                element: <RouterBannerAdd />,
            },
            {
                path: 'customer',
                element: <RouterCustomer />,
            },
            {
                path: 'customer/edit',
                element: <RouterEditCustomer />,
            },
            {
                path: 'customer/add',
                element: <RouterCustomerAdd />,
            },
            {
                path: 'order',
                element: <RouterOrder />,
            },
            {
                path: 'product',
                element: <RouterProduct />,
            },
            {
                path: 'product/add',
                element: <RouterAddProduct />,
            },
            {
                path: 'product/edit',
                element: <RouterEditProduct />,
            },
            {
                path: 'comment',
                element: <RouterComment />,
            }
        ]
    },
];


const RenderRouter: FC = () => {
    const element = useRoutes(routeList);

    return element;
};

export default RenderRouter;

