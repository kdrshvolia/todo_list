import React from 'react';
import { v4 as uuidv4 } from 'uuid';

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

    addTodo = () => {
      const { todos, inputText } = this.state;
      const newTodo = {
        text: inputText,
        completed: false,
        id: uuidv4(),
      };
      this.setState({
        todos: [...todos, newTodo],
      });
    };

    render() {
      return <WrappedComponent setInputText={this.setInputText} addTodo={this.addTodo} />;
    }
  };
};

export { withTodoBoard };
