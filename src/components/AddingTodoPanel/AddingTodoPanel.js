import React, { useRef } from 'react';
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
  setIsModalOpened,
}) => {
  const input = useRef(null);
  const focusTextInput = () => {
    input.current.focus();
  };

  const handleBtnClick = () => {
    addTodo();
    setIsModalOpened(!isModalOpened);
  };
  return (
    <ModalWrapper isModalOpened={isModalOpened}>
      <AddingPanel>
        <CloseCross onClick={() => setIsModalOpened(!isModalOpened)}>&times;</CloseCross>
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

export default AddingTodoPanel;
