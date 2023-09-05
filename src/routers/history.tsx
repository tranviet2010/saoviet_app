import { createBrowserHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

export const history = createBrowserHistory();

export const HistoryRouter: React.FC<any> = ({ history, children }) => {
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location,
    });

    React.useLayoutEffect(() => {
        history.listen(setState);
    }, [history]);

    return React.createElement(Router, { children, navigator: history, ...state });
};
