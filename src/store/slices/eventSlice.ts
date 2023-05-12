import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import { IEvent } from '../../models/IEvent';
import { RootState } from '..';

interface EventState {
  quests: IUser[];
  events: IEvent[];
}

const initialState: EventState = {
  events: [],
  quests: [],
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setQuests(state, action: PayloadAction<IUser[]>) {
      state.quests = action.payload;
    },
    setEvents(state, action) {
      state.events = action.payload;
    },
  },
});

export const selectEvent = (state: RootState) => state.events;

export const { setEvents, setQuests } = eventSlice.actions;
export default eventSlice.reducer;
