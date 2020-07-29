import React from 'react';
import PropTypes from 'prop-types';
import { CustomHeader } from './StyledComponents';

const Header = ({ children }) => {
  return <CustomHeader>{children}</CustomHeader>;
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;
