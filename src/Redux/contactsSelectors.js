export const getContacts = store => {
  const { filter, contacts } = store;
  if (!filter) {
    return contacts;
  }
  const filteredContacts = contacts.filter(
    ({ name, number }) => name.toLowerCase().trim() || number.trim()
  );

  return filteredContacts;
};
