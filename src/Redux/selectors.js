import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;

export const selectContacts = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// export const selectContacts = store => {
//   const { filter, contacts } = store;
//   if (!filter) {
//     return contacts;
//   }
//   const filteredContacts = contacts.filter(
//     ({ name, number }) => name.toLowerCase().trim() || number.trim()
//   );

//   return filteredContacts;
// };
