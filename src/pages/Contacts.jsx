import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectItems } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsHeader, Message } from 'components/GlobalStyle';
import { Helmet } from 'react-helmet';

export default function Contacts() {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(selectItems);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <h1>Phonebook</h1>
      <Form contacts={contacts} />
      <ContactsHeader>Contacts</ContactsHeader>
      <Filter />
      {isLoading && <Message>Loading contacts...</Message>}
      <ContactList contacts={contacts} error={error} />{' '}
    </main>
  );
}
