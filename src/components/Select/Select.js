import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ optionsList, selectedOption, onChange }) => {
  const handleChange = ({ target }) => onChange(target.value);
  return (
    <select value={selectedOption} name="sort" onChange={handleChange}>
      {optionsList.map((option) => (
        <option value={option.type}>{option.value}</option>
      ))}
    </select>
  );
};

export default Select;
