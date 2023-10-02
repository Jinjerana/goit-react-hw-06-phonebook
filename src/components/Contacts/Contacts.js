import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleted } from 'Redux/contactsSlice';
import { getContacts } from 'Redux/contactsSelectors';

import { List, Item, Button } from './ContactsStyled';

const ContactsList = () => {
  const filteredContacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onDeleteContact = contactId => {
    dispatch(deleted(contactId));
  };

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            <span>{name}:</span>
            <span>{number}:</span>

            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactsList;
