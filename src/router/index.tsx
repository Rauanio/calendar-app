import { ReactNode } from 'react';
import { Calendar, Login } from '../pages';

export interface IRoute {
  path: string;
  element: ReactNode;
}

export enum RouteNames {
  CALENDAR = '/',
  LOGIN = '/login',
}

export const publicRoutes: IRoute[] = [{ path: RouteNames.LOGIN, element: <Login /> }];

export const privateRoutes: IRoute[] = [{ path: RouteNames.CALENDAR, element: <Calendar /> }];
