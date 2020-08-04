import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

  const filterTodos = (todos, filters) => {
    const filterTypes = Object.keys(filters);
    let result = [];
    filterTypes.forEach((type) => {
      result =
        result.length === 0
          ? todos.filter((todo) => todo[type].includes(filters[type]))
          : result.filter((todo) => todo[type].includes(filters[type]));
    });

    return result;
  };
  const filteredTodos = filterTodos(todos, filters);
  const defaultSort = 'default';
  const sortedTodos = sortType !== defaultSort ? sortTodos(filteredTodos, sortType) : filteredTodos;

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
