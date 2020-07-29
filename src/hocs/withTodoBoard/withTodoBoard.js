import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const sortOptions = [
  { type: 'default', value: 'Default' },
  { type: 'date', value: 'By date' },
  { type: 'text', value: 'By text' },
];

const withTodoBoard = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      inputText: '',
      searchQuery: '',
      sortOptions,
      sortType: sortOptions[0].type,
      date: new Date(),
    };

    setInputText = (text) => {
      this.setState({
        inputText: text,
      });
    };

    setDate = (value) => {
      this.setState({
        date: value,
      });
    };

    addTodo = () => {
      const { todos, inputText, date } = this.state;
      const newTodo = {
        text: inputText,
        completed: false,
        id: uuidv4(),
        date,
      };
      this.setState(
        {
          todos: [...todos, newTodo],
        },
        () => localStorage.setItem('todos', JSON.stringify(this.state.todos)),
      );
    };

    toggleTodo = (id) => {
      const { todos } = this.state;
      this.setState(
        {
          todos: todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        },
        () => localStorage.setItem('todos', JSON.stringify(this.state.todos)),
      );
    };

    searchTodos = (query) => {
      this.setState({
        searchQuery: query,
      });
    };

    deleteTodo = (id) => {
      const { todos } = this.state;
      this.setState(
        {
          todos: todos.filter((todo) => todo.id !== id),
        },
        () => localStorage.setItem('todos', JSON.stringify(this.state.todos)),
      );
    };

    setSortType = (type) => {
      this.setState({
        sortType: type,
      });
    };

    render() {
      return (
        <WrappedComponent
          setInputText={this.setInputText}
          addTodo={this.addTodo}
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          searchTodos={this.searchTodos}
          searchQuery={this.state.searchQuery}
          deleteTodo={this.deleteTodo}
          sortOptions={this.state.sortOptions}
          sortType={this.state.sortType}
          setSortType={this.setSortType}
          setDate={this.setDate}
        />
      );
    }
  };
};

export { withTodoBoard };
