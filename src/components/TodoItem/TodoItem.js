import React from 'react';
import Button from '../Button/Button';
import {
  ItemWrapper,
  DeleteButton,
  CustomSpan,
  ItemInfo,
  ItemText,
  ItemDate,
  InfoWrapper,
} from './StyledComponents';
import Checkbox from '../Checkbox/Checkbox';

const TodoItem = ({ text, completed, id, date, onClick, deleteTodo }) => {
  const handleClick = () => {
    onClick(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };
  return (
    <ItemWrapper completed={completed}>
      <InfoWrapper>
        <Checkbox completed={completed} onChange={handleClick} />
        <ItemInfo>
          <ItemText completed={completed}>{text}</ItemText>
          <ItemDate>
            <CustomSpan>Deadline</CustomSpan>
            {date}
          </ItemDate>
        </ItemInfo>
      </InfoWrapper>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </ItemWrapper>
  );
};

export default TodoItem;
