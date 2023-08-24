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
const RouterClassPartner = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/partner/class/class.partner'))
const RouterAddManageMenu = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/menu/manageMenu/add.manageMenu'))

const RouterPartnerClass = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/partner/class/class.partner'));
const RouterPartnerSchool = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/partner/school/school.partner'));
const RouterAddPartnerSchool = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/partner/school/add.school'));
const RouterAddPartnerClass = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/partner/class/add.class'));

const RouterBanner = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/bannner'));
const RouterBannerEdit = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/bannner/edit.banner'));
const RouterBannerAdd = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/bannner/add.banner'));




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
                path: 'menu/manageMenu',
                element: <RouterManageMenu />,
            },
            {
                path: 'menu/manageMenu/add',
                element: <RouterAddManageMenu />,
            },
            {
                path: 'menu/manageDetailMenu',
                element: <RouterDetailManageMenu />,
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
                path: 'partner/school',
                element: <RouterPartnerSchool />,
            },
            {
                path: 'partner/school/add',
                element: <RouterAddPartnerSchool />,
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
            }
        ]
    },
];


const RenderRouter: FC = () => {
    const element = useRoutes(routeList);

    return element;
};

export default RenderRouter;

