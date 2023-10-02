import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { added } from 'Redux/contactsSlice';
import { getContacts } from 'Redux/contactsSelectors';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      //eslint-disable-next-line
      /^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required(),
  number: yup
    .string()
    .trim()
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const Forma = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = newContact => {
    const isSameContact = contacts.some(
      ({ name, number }) =>
        newContact.name.toLowerCase() === name.toLowerCase() ||
        newContact.number === number
    );

    if (isSameContact) {
      alert(`${newContact.name}: is already in contacts`);

      return;
    }

    // dispatch(added({ name, number }));
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form>
          <label htmlFor="name">
            Name
            <Field id="name" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
          </label>

          <label htmlFor="number">
            Number
            <Field id="number" name="number" placeholder="+380100000000" />
            <ErrorMessage name="number" component="div" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Forma;