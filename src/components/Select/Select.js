import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ optionsList, selectedOption, onChange, labelText }) => {
  const handleChange = ({ target }) => onChange(target.value);
  return (
    <label>
      {labelText}
      <select value={selectedOption} name="sort" onChange={handleChange}>
        {optionsList.map((option) => (
          <option value={option.type} key={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </label>
  );
};

Select.propTypes = {
  labelText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
  optionsList: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Select;
