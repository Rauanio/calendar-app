import axios from 'axios';
import { AppDispatch } from '..';
import { setAuth, setError, setIsLoading, setUser } from './authSlice';
import { IUser } from '../../models/IUser';
import { setQuests } from './eventSlice';

export const login =
  (username: string, password: string): any =>
  async (dispath: AppDispatch) => {
    try {
      dispath(setIsLoading(true));
      setTimeout(async () => {
        const response = await axios.get<IUser[]>('./users.json');
        const mockUser = response.data.find(
          (user) => user.username === username && user.password === password,
        );
        if (mockUser) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUser.username);
          dispath(setAuth(true));
          dispath(setUser(mockUser));
        } else {
          dispath(setError('Не правльный логин или пароль!'));
        }
        dispath(setIsLoading(false));
      }, 1000);
    } catch (e) {
      dispath(setError('Ошибка!!!'));
    }
  };

export const logout = (): any => async (dispath: AppDispatch) => {
  localStorage.removeItem('auth');
  localStorage.removeItem('username');
  dispath(setUser({} as IUser));
  dispath(setAuth(false));
};

export const fetchGuests = (): any => async (dispath: AppDispatch) => {
  try {
    const res = await axios.get('/users.json');
    dispath(setQuests(res.data));
  } catch (e) {
    console.log(e);
  }
};
