import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import { IEvent } from '../../models/IEvent';
import { RootState } from '..';

interface EventState {
  quests: IUser[];
  events: IEvent[];
}

const initialState: EventState = {
  quests: [],
  events: [],
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setQuests(state, action) {
      state.quests = action.payload;
    },
    setEvents(state, action) {
      state.events = action.payload;
    },
  },
});

export const selectEvent = (state: RootState) => state.event;

export const { setEvents, setQuests } = eventSlice.actions;
export default eventSlice.reducer;
