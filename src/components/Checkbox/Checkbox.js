import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon } from './StyledComponents';

const Checkbox = ({ completed, onChange }) => {
  return (
    <CheckboxContainer onClick={onChange}>
      <HiddenCheckbox type="checkbox" name="checkbox" checked={completed} />
      <StyledCheckbox checked={completed}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

Checkbox.propTypes = {
  completed: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
