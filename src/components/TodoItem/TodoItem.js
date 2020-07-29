import React from 'react';
import PropTypes from 'prop-types';
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

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
