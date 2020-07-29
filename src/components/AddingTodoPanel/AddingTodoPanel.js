import React from 'react';
import Input from '../Input/Input';
import DateInput from '../DateInput/DateInput';
import { AddingButton, Wrapper } from '../TodoBoard/StyledComponents';
import { AddingPanel, CloseCross, ModalWrapper } from './StyledComponents';

const AddingTodoPanel = ({ setInputText, setDate, addTodo, isModalOpened }) => {
  return (
    <ModalWrapper isModalOpened={isModalOpened}>
      <AddingPanel>
        <CloseCross>&times;</CloseCross>
        <Input onChange={setInputText} placeholder="Add todo" />
        <DateInput onChange={setDate} />
        <AddingButton onClick={addTodo}>Add</AddingButton>
      </AddingPanel>
    </ModalWrapper>
  );
};

export default AddingTodoPanel;
