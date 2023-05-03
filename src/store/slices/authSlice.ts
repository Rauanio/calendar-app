import { IUser } from '../../models/IUser';
import { RootState } from './../index';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuth: boolean;
  user: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser[],
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setAuth, setError, setIsLoading, setUser } = authSlice.actions;
export default authSlice.reducer;
