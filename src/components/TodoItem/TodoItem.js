import React from 'react';
import Button from '../Button/Button';
import {
  ItemWrapper,
  DeleteButton,
  CustomSpan,
  ItemInfo,
  ItemText,
  ItemDate,
} from './StyledComponents';

const TodoItem = ({ text, completed, id, date, onClick, deleteTodo }) => {
  const handleClick = () => {
    onClick(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };
  return (
    <ItemWrapper completed={completed}>
      <ItemInfo>
        <ItemText onClick={handleClick} completed={completed}>{text}</ItemText>
        <ItemDate>
          <CustomSpan>Deadline</CustomSpan>
          {date}
        </ItemDate>
      </ItemInfo>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </ItemWrapper>
  );
};

export default TodoItem;
