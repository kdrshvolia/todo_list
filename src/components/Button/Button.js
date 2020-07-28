import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
