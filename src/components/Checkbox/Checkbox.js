import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ completed, onChange }) => {
  const handleChange = () => onChange();
  return <input type="checkbox" name="checkbox" checked={completed} onChange={handleChange} />;
};

export default Checkbox;
