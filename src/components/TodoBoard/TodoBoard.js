import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import DateInput from '../DateInput/DateInput';
import TodoList from '../TodoList/TodoList';
import Button from '../Button/Button';

const TodoBoard = ({ setInputText }) => {
  return (
    <div>
      <Input onChange={setInputText} />
      <DateInput />
      <Button>Add</Button>
      <TodoList />
    </div>
  );
};

export default TodoBoard;
