import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput } from './StyledComponents';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleChange = ({ target }) => this.props.onChange(target.value);

  handleFocus = () => this.input.current.focus();

  render() {
    const { inputText, onChange, placeholder } = this.props;
    return (
      <CustomInput
        type="text"
        value={inputText}
        onChange={this.handleChange}
        placeholder={placeholder}
        ref={this.input}
        onFocus={this.handleFocus}
      />
    );
  }
}

Input.propTypes = {
  inputText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
