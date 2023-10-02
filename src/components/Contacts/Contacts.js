import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleted } from 'Redux/contactsSlice';
import { selectVisibleContacts } from 'Redux/selectors';

import { List, Item, Button } from './ContactsStyled';

const ContactsList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            <span>{name}:</span>
            <span>{number}:</span>

            <Button type="button" onClick={() => dispatch(deleted(id))}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactsList;
