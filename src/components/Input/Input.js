import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputText, onChange, placeholder }) => {
  const handleChange = () => {
    onChange();
  };
  return <input type="text" value={inputText} onChange={handleChange} placeholder={placeholder} />;
};

Input.propTypes = {
  inputText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
