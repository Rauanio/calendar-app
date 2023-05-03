import React from 'react';
import { AppRouter, Nav } from './components';
import { setAuth, setUser } from './store/slices/authSlice';
import { IUser } from './models/IUser';
import './App.css';

function App() {
  React.useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser);
      setAuth(true);
    }
  }, []);

  return (
    <>
      <Nav />
      <AppRouter />
    </>
  );
}

export default App;
