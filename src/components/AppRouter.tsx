import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RouteNames, privateRoutes, publicRoutes } from '../router';
import { useSelector } from 'react-redux';
import { selectAuth } from '../store/slices/authSlice';

export const AppRouter = () => {
  const { isAuth } = useSelector(selectAuth);
  
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.CALENDAR} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
    </Routes>
  );
};
