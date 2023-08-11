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
                path: 'menu/manageDetailMenu',
                element: <RouterDetailManageMenu />,
            }
        ]
    },
];


const RenderRouter: FC = () => {
    const element = useRoutes(routeList);

    return element;
};

export default RenderRouter;

