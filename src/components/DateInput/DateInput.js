import React from 'react';
import PropTypes from 'prop-types';
import { CustomDateInput } from './StyledComponents';

const DateInput = ({ value, onChange, labelText }) => {
  const handleChange = ({ target }) => onChange(target.value);

  return (
    <label>
      {labelText}
      <CustomDateInput type="date" value={value} onChange={handleChange} />
    </label>
  );
};

DateInput.propTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
};

export default DateInput;
