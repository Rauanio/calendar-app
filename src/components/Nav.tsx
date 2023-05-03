import React from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { useSelector } from 'react-redux';
import { selectAuth } from '../store/slices/authSlice';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/ActionCreators';

const items1: MenuProps['items'] = ['1'].map((key) => ({
  key,
  label: 'Логин',
}));

const items2: MenuProps['items'] = ['1'].map((key) => ({
  key,
  label: 'Выйти',
}));

export const Nav = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector(selectAuth);
  const dispatch = useDispatch()
  return (
    <>
      <Layout.Header>
        {isAuth ? (
          <>
            <Menu
              theme="dark"
              mode="horizontal"
              selectable={false}
              items={items2}
              style={{ justifyContent: 'end' }}
              onClick={() => dispatch(logout())}
            />
          </>
        ) : (
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            items={items1}
            style={{ justifyContent: 'end' }}
            onClick={() => navigate(RouteNames.LOGIN)}
          />
        )}
      </Layout.Header>
    </>
  );
};
