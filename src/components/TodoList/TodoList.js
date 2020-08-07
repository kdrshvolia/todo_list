import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import TodoItem from '../TodoItem/TodoItem';
import { CustomList } from './StyledComponents';
import { deleteTodo, toggleTodo } from '../../redux/actions/todosActions';

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

  const selectDisplayedTodos = createSelector(
    (state) => state.todos,
    (state) => state.filters,
    (state) => state.sort,
    (todos, filters, sortType) => {
      const filteredTodos = todos.filter((item) =>
        Object.keys(filters).every((type) => item[type].includes(filters[type])),
      );
      const defaultSort = 'default';
      return sortType === defaultSort ? filteredTodos : sortTodos(filteredTodos, sortType);
    },
  );

  const displayedTodos = useSelector(selectDisplayedTodos);

  return (
    <CustomList>
      {displayedTodos.length === 0 ? (
        <div>No added tasks yet :(</div>
      ) : (
        displayedTodos.map((item) => (
          <TodoItem
            text={item.text}
            completed={item.isCompleted}
            id={item.id}
            key={item.id}
            date={item.date}
            onClick={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </CustomList>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filters: state.filters,
    sortType: state.sort,
  };
};

const mapDispatchToProps = {
  deleteTodo,
  toggleTodo,
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
  filters: PropTypes.shape({
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
