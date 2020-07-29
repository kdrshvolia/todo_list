import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import DateInput from '../DateInput/DateInput';
import TodoList from '../TodoList/TodoList';
import Button from '../Button/Button';
import Select from '../Select/Select';

const TodoBoard = ({
  setInputText,
  todos,
  searchQuery,
  addTodo,
  toggleTodo,
  searchTodos,
  deleteTodo,
  sortOptions,
  sortType,
  setSortType,
  setDate,
}) => {
  return (
    <div>
      <Input onChange={searchTodos} placeholder="Search for todos..." />
      <Select optionsList={sortOptions} selectedOption={sortType} onChange={setSortType} />
      <Input onChange={setInputText} />
      <DateInput onChange={setDate} />
      <Button onClick={addTodo}>Add</Button>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        searchQuery={searchQuery}
        deleteTodo={deleteTodo}
        sortType={sortType}
      />
    </div>
  );
};

export default TodoBoard;
