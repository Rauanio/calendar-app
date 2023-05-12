import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import auth from './slices/authSlice';
import events from './slices/eventSlice';

export const store = configureStore({
  reducer: {
    auth,
    events,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
