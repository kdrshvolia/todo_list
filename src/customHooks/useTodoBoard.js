import React, { useState, useEffect } from 'react';

const UseTodoBoard = () => {
  const [inputText, setInputText] = useState('');
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpened, setModalOpened] = useState(false);

  useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)), [todos]);

  return {
    todos,
    inputText,
    setInputText,
    date,
    setDate,
    searchQuery,
    isModalOpened,
    setModalOpened,
  };
};

export default UseTodoBoard;
