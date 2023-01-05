// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
// import css from '../Form/Form.module.css';

// export default function Form({ onSubmit }) {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const nameInputId = nanoid();
//   const numberInputId = nanoid();

//   const handleChange = evt => {
//     const { name, value } = evt.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };
//   const handleSubmit = evt => {
//     evt.preventDefault();
//     console.log(name, number);
//     onSubmit({ name, number });
//     reset();
//   };
//   const reset = () => {
//     setName('');
//     setNumber('');
//   };
//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <label htmlFor={nameInputId} className={css.label}>
//         Name
//         <input
//           className={css.input}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={name}
//           onChange={handleChange}
//           id={nameInputId}
//         />
//       </label>

//       <label htmlFor={numberInputId} className={css.label}>
//         Number
//         <input
//           className={css.input}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={number}
//           onChange={handleChange}
//           id={numberInputId}
//         />
//       </label>
//       <button type="submit" className={css.btnAdd}>
//         Add contact
//       </button>
//     </form>
//   );
// }

// Form.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.number,
// };

import css from './Form.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { nanoid } from 'nanoid';

export const Form = ({ contacts }) => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    let isAdded = false;
    const {
      elements: { name, number },
    } = e.currentTarget;

    contacts.map(contact => {
      if (contact.name === name.value) {
        alert(`${name.value} is already in contacts`);
        return (isAdded = true);
      }
      return isAdded;
    });

    if (!isAdded) {
      const addedContact = {
        name: name.value,
        number: number.value,
        id: nanoid(),
      };
      dispatch(addContact(addedContact));
    }
    e.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.btnAdd} type="submit">
        Add contact
      </button>
    </form>
  );
};

Form.propType = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
