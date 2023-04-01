import { useSelector, useDispatch } from 'react-redux';

import { List, Button, Text } from './ContactList.styled';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.value);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getVisibleContacts();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </li>
      ))}
    </List>
  );
};

export default ContactList;
