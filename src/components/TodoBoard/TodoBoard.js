import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../TodoList/TodoList';
import { OpenModalButton } from './StyledComponents';
import AddingTodoPanel from '../AddingTodoPanel/AddingTodoPanel';
import FiltersPanel from '../FiltersPanel/FiltersPanel';
import Header from '../Header/Header';

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
  inputText,
}) => {
  return (
    <div>
      <Header>My tasks</Header>
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
          inputText={inputText}
        />
      ) : null}
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        sortType={sortType}
        filters={filters}
      />
    </div>
  );
};

TodoBoard.propTypes = {
  setInputText: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  searchTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setSortType: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
  setFilterDate: PropTypes.func.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  inputText: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  filters: PropTypes.objectOf({
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  sortType: PropTypes.string.isRequired,
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({ type: PropTypes.string.isRequired, value: PropTypes.string.isRequired }),
  ).isRequired,
};

export default TodoBoard;
