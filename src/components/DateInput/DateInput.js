import React from 'react';
import PropTypes from 'prop-types';

const DateInput = ({ value, onChange }) => {
  const handleChange = ({ target }) => onChange(target.value);

  return <input type="date" value={value} onChange={handleChange} />;
};

DateInput.propTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DateInput;
