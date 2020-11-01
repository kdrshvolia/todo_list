import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import DateInput from '../DateInput/DateInput';
import { AddingButton } from '../TodoBoard/StyledComponents';
import { AddingPanel, CloseCross, ModalWrapper } from './StyledComponents';
import { addTodo } from '../../redux/actions/todosActions';

const AddingTodoPanel = ({
  setInputText,
  setDate,
  addTodo,
  isModalOpened,
  inputText,
  setModalOpened,
  date,
}) => {
  const input = useRef(null);
  const focusTextInput = () => {
    input.current.focus();
  };

  const handleBtnClick = () => {
    addTodo(inputText, date);
    setModalOpened(!isModalOpened);
  };
  return (
    <ModalWrapper isModalOpened={isModalOpened}>
      <AddingPanel>
        <CloseCross onClick={() => setModalOpened(!isModalOpened)}>&times;</CloseCross>
        <Input
          onChange={setInputText}
          placeholder="Enter a task..."
          ref={input}
          inputText={inputText}
        />
        <DateInput onChange={setDate} value={date} />
        <AddingButton onClick={inputText ? handleBtnClick : focusTextInput}>Add</AddingButton>
      </AddingPanel>
    </ModalWrapper>
  );
};

const mapDispatchToProps = {
  addTodo,
};

AddingTodoPanel.propTypes = {
  setInputText: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  inputText: PropTypes.string.isRequired,
  setModalOpened: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(AddingTodoPanel);
