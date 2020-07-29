import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import DateInput from '../DateInput/DateInput';
import TodoList from '../TodoList/TodoList';
import Button from '../Button/Button';
import Select from '../Select/Select';
import { AddingButton, Wrapper } from './StyledComponents';

const TodoBoard = ({
  setInputText,
  todos,
  addTodo,
  toggleTodo,
  searchTodos,
  deleteTodo,
  sortOptions,
  sortType,
  setSortType,
  setDate,
  setFilterDate,
  filters,
}) => {
  return (
    <Wrapper>
      <Input onChange={searchTodos} placeholder="Search for todos..." />
      <DateInput onChange={setFilterDate} />
      <Select optionsList={sortOptions} selectedOption={sortType} onChange={setSortType} />
      <Input onChange={setInputText} />
      <DateInput onChange={setDate} />
      <AddingButton onClick={addTodo}>Add</AddingButton>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        sortType={sortType}
        filters={filters}
      />
    </Wrapper>
  );
};

export default TodoBoard;
