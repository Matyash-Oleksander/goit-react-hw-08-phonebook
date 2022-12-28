import { useDispatch, useSelector } from 'react-redux';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { selectItems } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import css from '../components/App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(selectItems);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <Form contacts={contacts} />
      <h2 className="contactsHeader">Contacts</h2>
      <Filter />
      {isLoading && <p className="inputName">Loading contacts...</p>}
      <ContactList contacts={contacts} error={error} />
      <GlobalStyle />
    </div>
  );
};

// import PropTypes from 'prop-types';
// // import { Component } from 'react';
// import { useState, useEffect } from 'react';
// import Form from './Form/Form';
// import { nanoid } from 'nanoid';
// import ContactList from './ContactList/ContactList';
// import css from '../components/App.module.css';
// import Filter from './Filter/Filter';
// import { useDispatch, useSelector } from 'react-redux';
// import { addInfoConctact } from '../redux/actions';
// import { getItems } from 'redux/selectors';

// export default function App() {
//   const contacts = useSelector(getItems);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(
//       addInfoConctact({
//         title: '',
//         description: '',
//       })
//     );
//   }, [dispatch]);

//   console.log(infoConctact);

//   const [filter, setFilter] = useState('');
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
//   });

//   const addConctact = data => {
//     const { name, number } = data;
//     const normalizedFilter = name.toLowerCase();
//     const checkByName = contacts.find(
//       contact => contact.name.toLowerCase() === normalizedFilter
//     );

//     const contact = {
//       id: nanoid(),
//       name: name,
//       number: number,
//     };

//     if (checkByName) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     setContacts(contacts => [...contacts, contact]);
//     console.log(contacts);
//   };

//   const deleteConctact = contactId => {
//     setContacts(contacts =>
//       contacts.filter(contact => contact.id !== contactId)
//     );
//   };

//   const changeFilter = evt => {
//     const { value } = evt.target;
//     setFilter(value);
//     console.log(value);
//   };

//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLocaleLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLocaleLowerCase().includes(normalizedFilter)
//     );
//   };

//   useEffect(() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const visibleContacts = getVisibleContacts();

//   return (
//     <div className={css.section}>
//       <h1>Phonebook</h1>
//       <Form onSubmit={addConctact} />

//       <h1>Contacts</h1>
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList
//         contacts={visibleContacts}
//         onDeleteConctact={deleteConctact}
//       />
//     </div>
//   );
// }

// App.propTypes = {
//   contacts: PropTypes.array,
//   filter: PropTypes.string,
// };
