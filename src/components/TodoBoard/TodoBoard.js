import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import DateInput from '../DateInput/DateInput';
import TodoList from '../TodoList/TodoList';
import Button from '../Button/Button';

const TodoBoard = ({ setInputText, todos, searchQuery, addTodo, toggleTodo, searchTodos }) => {
  return (
    <div>
      <Input onChange={searchTodos} placeholder="Search for todos..." />
      <Input onChange={setInputText} />
      <DateInput />
      <Button onClick={addTodo}>Add</Button>
      <TodoList todos={todos} toggleTodo={toggleTodo} searchQuery={searchQuery} />
    </div>
  );
};

export default TodoBoard;
