import { RootState } from './../index';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
