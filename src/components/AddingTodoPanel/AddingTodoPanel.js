import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import DateInput from '../DateInput/DateInput';
import { AddingButton } from '../TodoBoard/StyledComponents';
import { AddingPanel, CloseCross, ModalWrapper } from './StyledComponents';

const AddingTodoPanel = ({
  setInputText,
  setDate,
  addTodo,
  isModalOpened,
  inputText,
  setModalOpened,
}) => {
  const input = useRef(null);
  const focusTextInput = () => {
    input.current.focus();
  };

  const handleBtnClick = () => {
    addTodo();
    setModalOpened(!isModalOpened);
  };
  return (
    <ModalWrapper isModalOpened={isModalOpened}>
      <AddingPanel>
        <CloseCross onClick={() => setModalOpened(!isModalOpened)}>&times;</CloseCross>
        <Input
          onChange={setInputText}
          placeholder="Enter a task..."
          ref={input}
          inputText={inputText}
        />
        <DateInput onChange={setDate} />
        <AddingButton onClick={inputText ? handleBtnClick : focusTextInput}>Add</AddingButton>
      </AddingPanel>
    </ModalWrapper>
  );
};

AddingTodoPanel.propTypes = {
  setInputText: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  inputText: PropTypes.string.isRequired,
  setModalOpened: PropTypes.func.isRequired,
};

export default AddingTodoPanel;
