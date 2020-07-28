import React from 'react';

const withTodoBoard = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      todos: [],
      inputText: '',
    };

    setInputText = (text) => {
      this.setState({
        inputText: text,
      });
    };

    render() {
      return <WrappedComponent setInputText={this.setInputText} />;
    }
  };
};

export { withTodoBoard };
