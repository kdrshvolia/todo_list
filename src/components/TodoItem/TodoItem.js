import React from 'react';
import Button from '../Button/Button';

const TodoItem = ({ text, completed, id, onClick, deleteTodo }) => {
  const handleClick = () => {
    onClick(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };
  return (
    <div>
      <p onClick={handleClick}>{text}</p>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default TodoItem;
