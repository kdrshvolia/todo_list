import React from 'react';
import TodoList from '../TodoList/TodoList';
import { OpenModalButton } from './StyledComponents';
import AddingTodoPanel from '../AddingTodoPanel/AddingTodoPanel';
import FiltersPanel from '../FiltersPanel/FiltersPanel';
import Header from '../Header/Header';
import UseTodoBoard from '../../customHooks/useTodoBoard';

const TodoBoard = () => {
  const { inputText, setInputText, date, setDate, isModalOpened, setModalOpened } = UseTodoBoard();
  return (
    <div>
      <Header>My tasks</Header>
      <FiltersPanel />
      <OpenModalButton onClick={setModalOpened}>Add Task</OpenModalButton>
      {isModalOpened ? (
        <AddingTodoPanel
          setDate={setDate}
          setInputText={setInputText}
          isModalOpened={isModalOpened}
          inputText={inputText}
          setModalOpened={setModalOpened}
          date={date}
        />
      ) : null}
      <TodoList />
    </div>
  );
};

export default TodoBoard;
