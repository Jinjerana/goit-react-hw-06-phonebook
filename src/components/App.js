import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../Redux/store';
import Forma from './Form';
import ContactList from './Contacts/Contacts';
import Filter from './Filter';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );

  const [filter, setFilter] = useState(' ');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const addContact = newContact => {
    const isSameContact = contacts.some(
      ({ name, number }) =>
        name.toLowerCase() === newContact.name.toLowerCase() ||
        number === newContact.number
    );

    if (isSameContact) {
      alert(`${newContact.name}: is already in contacts`);
      return;
    }

    setContacts(contacts => [newContact, ...contacts]);
  };

  const changeFilter = e => {
    setFilter(e.target.value.toLowerCase());
  };

  const getVisibleContacts = () =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  return (
    <div>
      <Provider store={store}>
        <h1>Phonebook</h1>
        <Forma onAddContact={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList onFilter={getVisibleContacts()} onDelete={deleteContact} />
      </Provider>
    </div>
  );
}
