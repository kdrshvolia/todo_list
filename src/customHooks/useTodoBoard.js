import React, { useState } from 'react';

const UseTodoBoard = () => {
  const [inputText, setInputText] = useState('');
  const [date, setDate] = useState(new Date());
  const [isModalOpened, setModalOpened] = useState(false);

  return {
    inputText,
    setInputText,
    date,
    setDate,
    isModalOpened,
    setModalOpened,
  };
};

export default UseTodoBoard;
