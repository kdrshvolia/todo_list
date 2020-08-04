import React from 'react';
import TodoList from '../TodoList/TodoList';
import { OpenModalButton } from './StyledComponents';
import AddingTodoPanel from '../AddingTodoPanel/AddingTodoPanel';
import FiltersPanel from '../FiltersPanel/FiltersPanel';
import Header from '../Header/Header';
import UseTodoBoard from '../../customHooks/useTodoBoard';

const TodoBoard = () => {
  const {
    todos,
    inputText,
    setInputText,
    date,
    setDate,
    addTodo,
    deleteTodo,
    toggleTodo,
    searchTodos,
    setFilterDate,
    sortType,
    setSortType,
    filters,
    sortOptions,
    isModalOpened,
    setModalOpened,
    searchQuery,
  } = UseTodoBoard();
  return (
    <div>
      <Header>My tasks</Header>
      <FiltersPanel
        searchTodos={searchTodos}
        setFilterDate={setFilterDate}
        setSortType={setSortType}
        sortOptions={sortOptions}
        sortType={sortType}
        searchQuery={searchQuery}
      />
      <OpenModalButton onClick={setModalOpened}>Add Task</OpenModalButton>
      {isModalOpened ? (
        <AddingTodoPanel
          setDate={setDate}
          setInputText={setInputText}
          isModalOpened={isModalOpened}
          setModalOpen={setModalOpened}
          inputText={inputText}
          setModalOpened={setModalOpened}
          date={date}
        />
      ) : null}
      <TodoList sortType={sortType} filters={filters} />
    </div>
  );
};

export default TodoBoard;
