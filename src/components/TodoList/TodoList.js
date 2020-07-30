import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';
import { CustomList } from './StyledComponents';

const TodoList = ({ todos, toggleTodo, deleteTodo, sortType, filters }) => {
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

  const multiPropsFilter = (todosArr, filters) => {
    const filterKeys = Object.keys(filters);
    return todosArr.filter((todo) => {
      return filterKeys.every((key) => {
        if (!filters[key].length) return true;
        // Loops again if product[key] is an array (for material attribute).
        if (Array.isArray(todo[key])) {
          return todo[key].some((keyEle) => filters[key].includes(keyEle));
        }
        return todo[key].includes(filters[key]);
      });
    });
  };
  const filteredTodos = multiPropsFilter(todos, filters);
  const sortedTodos = sortType !== 'default' ? sortTodos(filteredTodos, sortType) : filteredTodos;

  return (
    <CustomList>
      {sortedTodos.length === 0 ? (
        <div>No added tasks yet :(</div>
      ) : (
        sortedTodos.map((item) => (
          <TodoItem
            text={item.text}
            completed={item.completed}
            id={item.id}
            date={item.date}
            onClick={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </CustomList>
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
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  filters: PropTypes.objectOf({
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoList;
