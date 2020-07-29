import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput } from './StyledComponents';

const Input = ({ inputText, onChange, placeholder }) => {
  const handleChange = ({ target }) => onChange(target.value);

  return (
    <CustomInput type="text" value={inputText} onChange={handleChange} placeholder={placeholder} />
  );
};

Input.propTypes = {
  inputText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
