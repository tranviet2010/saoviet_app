import { AppDispatch } from './stores';
import './App.css';
import { ConfigProvider } from 'antd';
import { Suspense, useEffect } from 'react';
import RenderRouter from './routers';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUserById } from './stores/param';

function App() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchUserById())
  }, [])
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
