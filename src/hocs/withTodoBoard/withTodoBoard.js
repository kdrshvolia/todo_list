import React from 'react';

const withTodoBoard = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      todos: [],
    };

    render() {
      return <WrappedComponent />;
    }
  };
};

export { withTodoBoard };
