import { AppDispatch } from './stores';
import './App.css';
import { ConfigProvider } from 'antd';
import { Suspense, useEffect } from 'react';
import RenderRouter from './routers';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUserById } from './stores/param';
import { HistoryRouter, history } from './routers/history';

function App() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchUserById())
  }, [dispatch])
  return (
    <ConfigProvider
      componentSize="middle"
      theme={{ token: { colorPrimary: '#00ac47' } }}
    >
      <HistoryRouter history={history}>
        <RenderRouter />
      </HistoryRouter>
    </ConfigProvider>
  );
}

export default App;
