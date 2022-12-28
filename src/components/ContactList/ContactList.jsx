// import React from 'react';
// import { nanoid } from 'nanoid';
// // import PropTypes from 'prop-types';
// import css from '../ContactList/ContactList.module.css';

// const ContactList = ({ contacts, onDeleteConctact }) => (
//   <ul className={css.contacts}>
//     {contacts.map(({ id, name, number }) => (
//       <li key={nanoid()} className={css.contact}>
//         <p className={css.text}>
//           {name} : {number}
//         </p>
//         <button className={css.btnDel} onClick={() => onDeleteConctact(id)}>
//           Delete
//         </button>
//       </li>
//     ))}
//   </ul>
// );

// export default ContactList;

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectSearchValue } from 'redux/selectors';
import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts, error }) => {
  const filter = useSelector(selectSearchValue);

  let filteredContacts = contacts;

  if (filter.searchValue.toLowerCase()) {
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.searchValue.toLowerCase())
    );
  }

  return (
    <>
      {!contacts.length && (
        <p className="inputName">Your contactlist is empty</p>
      )}
      {!filteredContacts.length && Boolean(contacts.length) && (
        <p className="inputName">No contacts found</p>
      )}
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactListItem id={id} name={name} number={number} key={id} />
          );
        })}
      </ul>
    </>
  );
};

ContactList.propType = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
