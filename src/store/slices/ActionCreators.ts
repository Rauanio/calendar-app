import axios from 'axios';
import { AppDispatch } from '..';
import { setAuth, setError, setIsLoading, setUser } from './authSlice';
import { IUser } from '../../models/IUser';
import { setEvents, setQuests } from './eventSlice';
import { IEvent } from '../../models/IEvent';

export const login =
  (username: string, password: string): any =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      setTimeout(async () => {
        const response = await axios.get<IUser[]>('./users.json');
        const mockUser = response.data.find(
          (user) => user.username === username && user.password === password,
        );
        if (mockUser) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUser.username);
          dispatch(setUser(mockUser));
          dispatch(setAuth(true));
        } else {
          dispatch(setError('Некорректный логин или пароль'));
        }
        dispatch(setIsLoading(false));
      }, 1000);
    } catch (e) {
      dispatch(setError('Произошла ошибка при логине'));
    }
  };

export const logout = (): any => async (dispatch: AppDispatch) => {
  localStorage.removeItem('auth');
  localStorage.removeItem('username');
  dispatch(setUser({} as IUser));
  dispatch(setAuth(false));
};

export const fetchGuests = (): any => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get('/users.json');
    dispatch(setQuests(res.data));
  } catch (e) {
    console.log(e);
  }
};

export const createEvent =
  (event: IEvent): any =>
  async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(setEvents(json));
      localStorage.setItem('events', JSON.stringify(json));
    } catch (e) {
      console.log(e);
    }
  };

export const fetchEvents =
  (username: string): any =>
  async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvents = json.filter(
        (ev) => ev.author === username || ev.guest === username,
      );
      dispatch(setEvents(currentUserEvents));
    } catch (e) {
      console.log(e);
    }
  };
