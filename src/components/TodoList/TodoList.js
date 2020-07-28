import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos, toggleTodo, searchQuery }) => {
  const displayedTodos = searchQuery
    ? todos.filter((todo) => todo.text.toLowerCase().includes(searchQuery))
    : todos;
  return (
    <div>
      {displayedTodos.map((item) => (
        <TodoItem text={item.text} completed={item.completed} id={item.id} onClick={toggleTodo} />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default TodoList;
