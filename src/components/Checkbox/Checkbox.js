import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon } from './StyledComponents';

const Checkbox = ({ completed, onChange }) => {
  const handleChange = () => onChange();
  return (
    <CheckboxContainer onClick={handleChange}>
      <HiddenCheckbox type="checkbox" name="checkbox" checked={completed} />
      <StyledCheckbox checked={completed}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default Checkbox;
