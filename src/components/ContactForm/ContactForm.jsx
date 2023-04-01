import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { addContact } from '../../redux/contactsSlice';

import { Form, FormField, Field, Button } from './ContactForm.styled';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.value);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    }

    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    console.log(contacts);

    contacts.filter(contact => contact.name === name).length
      ? alert(`${newContact.name} is already in contacts`)
      : dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        Name
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter contact name..."
          value={name}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        Phone
        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number..."
          value={number}
          onChange={handleChange}
        />
      </FormField>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};
