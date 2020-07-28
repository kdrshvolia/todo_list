import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const withTodoBoard = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
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
      this.setState(
        {
          todos: [...todos, newTodo],
        },
        () => localStorage.setItem('todos', JSON.stringify(this.state.todos)),
      );
    };

    render() {
      return <WrappedComponent setInputText={this.setInputText} addTodo={this.addTodo} />;
    }
  };
};

export { withTodoBoard };
