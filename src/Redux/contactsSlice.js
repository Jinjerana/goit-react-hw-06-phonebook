import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    added: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          name,
          number,
          id: nanoid(),
        };
      },
    },
    deleted(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { added, deleted } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
