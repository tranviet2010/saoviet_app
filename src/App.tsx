import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { history, HistoryRouter } from './routers/history';
import { Suspense, useEffect } from 'react';
import RenderRouter from './routers';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ConfigProvider
      componentSize="middle"
      theme={{ token: { colorPrimary: '#00ac47' } }}
    >
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
