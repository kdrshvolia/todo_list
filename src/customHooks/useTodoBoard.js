import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const UseTodoBoard = () => {
  const [inputText, setInputText] = useState('');
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOptions] = useState([
    { type: 'default', value: 'Default' },
    { type: 'date', value: 'By date' },
    { type: 'text', value: 'By text' },
  ]);
  const [sortType, setSortType] = useState(sortOptions[0].type);
  const [filters, setFilters] = useState({ text: '', date: '' });
  const [isModalOpened, setIsModalOpened] = useState(false);

  const addTodo = () => {
    const newTodo = {
      text: inputText,
      completed: false,
      id: uuidv4(),
      date,
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setIsModalOpened(!isModalOpened);
  };

  useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)), [todos]);

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const searchTodos = (query) => {
    setSearchQuery(query);
    setFilters({ ...filters, text: query });
  };

  const setFilterDate = (filterDate) => {
    setFilters(filterDate);
  };

  return {
    todos,
    inputText,
    setInputText,
    date,
    setDate,
    addTodo,
    deleteTodo,
    toggleTodo,
    searchTodos,
    setFilterDate,
    sortType,
    setSortType,
    filters,
    sortOptions,
    isModalOpened,
    setIsModalOpened,
  };
};

export default UseTodoBoard;
