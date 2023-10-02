import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// export const added = createAction('contacts/add');

// export const deleted = createAction('contacts/delete');

// export const contactsReducer = createReducer({ contacts: [] }, builder =>
//   builder
//     .addCase(added, (state, action) => {
//       state.contacts += action.payload;
//       //   state.contacts.push(action.payload)
//     })
//     .addCase(deleted, (state, action) => {
//       state.contacts -= action.payload;
//     })
// );

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    added: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: nanoid(),
          name,
          number,
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
