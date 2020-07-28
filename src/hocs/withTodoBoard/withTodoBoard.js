import React from 'react';

const withTodoBoard = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      todos: [],
      inputText: '',
    };

    render() {
      return <WrappedComponent />;
    }
  };
};

export { withTodoBoard };
