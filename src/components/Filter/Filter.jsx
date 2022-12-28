// import React from 'react';
// // import { nanoid } from 'nanoid';
// // import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

// const Filter = ({ value, onChange }) => (
//   <label className={css.label}>
//     Find contacts by name
//     <input
//       className={css.input}
//       type="text"
//       required
//       value={value}
//       onChange={onChange}
//     />
//   </label>
// );

// export default Filter;

import { useDispatch } from 'react-redux';
import { setSearchValue } from 'redux/searchSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleSearch = e => {
    dispatch(setSearchValue(e.currentTarget.value));
  };

  return (
    <label className={css.label}>
      <p className="inputName">Find contacts by name</p>
      <input className={css.input} type="text" onChange={handleSearch} />
    </label>
  );
};
