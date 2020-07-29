import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos, toggleTodo, searchQuery, deleteTodo, sortType }) => {
  const sortTodos = (todosArr, type) => {
    return [...todosArr].sort((a, b) => {
      const aValue = a[type].toLowerCase();
      const bValue = b[type].toLowerCase();
      if (aValue < bValue) {
        return -1;
      }
      if (aValue > bValue) {
        return 1;
      }
      return 0;
    });
  };
  const displayedTodos = searchQuery
    ? todos.filter((todo) => todo.text.toLowerCase().includes(searchQuery))
    : todos;
  const sortedTodos = sortType !== 'default' ? sortTodos(todos, sortType) : todos;

  return (
    <div>
      {console.log(sortedTodos)}
      {sortedTodos.map((item) => (
        <TodoItem
          text={item.text}
          completed={item.completed}
          id={item.id}
          onClick={toggleTodo}
          deleteTodo={deleteTodo}
        />
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
