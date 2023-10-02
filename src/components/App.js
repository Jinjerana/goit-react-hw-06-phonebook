import Forma from './Form';
import ContactsList from './Contacts/Contacts';
import Filter from './Filter';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Forma />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
