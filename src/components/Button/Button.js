import React from 'react';
import PropTypes from 'prop-types';
import { CustomButton } from './StyledComponents';

const Button = ({ children, onClick }) => {
  return (
    <CustomButton type="button" onClick={onClick}>
      {children}
    </CustomButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
