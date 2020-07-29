import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import DateInput from '../DateInput/DateInput';
import TodoList from '../TodoList/TodoList';
import Button from '../Button/Button';
import Select from '../Select/Select';
import { AddingButton, OpenModalButton, Wrapper } from './StyledComponents';
import AddingTodoPanel from '../AddingTodoPanel/AddingTodoPanel';
import FiltersPanel from '../FiltersPanel/FiltersPanel';

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
  setModalOpen,
  isModalOpened,
}) => {
  return (
    <Wrapper>
      <FiltersPanel
        searchTodos={searchTodos}
        setFilterDate={setFilterDate}
        setSortType={setSortType}
        sortOptions={sortOptions}
        sortType={sortType}
      />
      <OpenModalButton onClick={setModalOpen}>Add Task</OpenModalButton>
      {isModalOpened ? (
        <AddingTodoPanel
          addTodo={addTodo}
          setDate={setDate}
          setInputText={setInputText}
          isModalOpened={isModalOpened}
          setModalOpen={setModalOpen}
        />
      ) : null}
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
