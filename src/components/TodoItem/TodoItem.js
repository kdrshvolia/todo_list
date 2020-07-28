import React from 'react';
import Button from '../Button/Button';

const TodoItem = ({ text, completed, id, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <div>
      <p onClick={handleClick}>{text}</p>
      <Button>Delete</Button>
    </div>
  );
};

export default TodoItem;
