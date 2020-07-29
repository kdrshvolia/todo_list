import React from 'react';
import Input from '../Input/Input';
import DateInput from '../DateInput/DateInput';
import { AddingButton, Wrapper } from '../TodoBoard/StyledComponents';
import { AddingPanel } from './StyledComponents';

const AddingTodoPanel = ({ setInputText, setDate, addTodo }) => {
  return (
    <AddingPanel>
      <Input onChange={setInputText} placeholder="Add todo" />
      <DateInput onChange={setDate} />
      <AddingButton onClick={addTodo}>Add</AddingButton>
    </AddingPanel>
  );
};

export default AddingTodoPanel;
