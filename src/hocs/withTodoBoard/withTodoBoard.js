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
      filters: { text: '', date: '' },
      isModalOpened: false,
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
          isModalOpened: false,
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
      const { filters } = this.state;
      this.setState({
        searchQuery: query,
        filters: { ...filters, text: query },
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

    setFilterDate = (date) => {
      const { filters } = this.state;
      this.setState({
        filterDate: date,
        filters: { ...filters, date },
      });
    };

    setModalOpen = () => {
      const { isModalOpened } = this.state;
      this.setState({
        isModalOpened: !isModalOpened,
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
          deleteTodo={this.deleteTodo}
          sortOptions={this.state.sortOptions}
          sortType={this.state.sortType}
          setSortType={this.setSortType}
          setDate={this.setDate}
          setFilterDate={this.setFilterDate}
          filters={this.state.filters}
          setModalOpen={this.setModalOpen}
          isModalOpened={this.state.isModalOpened}
          inputText={this.state.inputText}
        />
      );
    }
  };
};

export { withTodoBoard };
