import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { CustomInput } from './StyledComponents';

const Input = ({ inputText, onChange, placeholder }) => {
  const input = useRef(null);
  const handleChange = ({ target }) => onChange(target.value);

  const handleFocus = () => input.current.focus();

  return (
    <CustomInput
      type="text"
      value={inputText}
      onChange={handleChange}
      placeholder={placeholder}
      ref={input}
      onFocus={handleFocus}
    />
  );
};

Input.propTypes = {
  inputText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
