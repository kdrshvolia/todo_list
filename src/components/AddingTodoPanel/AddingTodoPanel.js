import React from 'react';
import Input from '../Input/Input';
import DateInput from '../DateInput/DateInput';
import { AddingButton } from '../TodoBoard/StyledComponents';
import { AddingPanel, CloseCross, ModalWrapper } from './StyledComponents';

class AddingTodoPanel extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusTextInput = () => {
    this.inputRef.current.handleFocus();
  };

  render() {
    const {
      setInputText,
      setDate,
      addTodo,
      isModalOpened,
      inputText,
      setIsModalOpened,
    } = this.props;
    const handleBtnClick = () => {
      addTodo();
      setIsModalOpened(!isModalOpened);
    };
    return (
      <ModalWrapper isModalOpened={isModalOpened}>
        <AddingPanel>
          <CloseCross onClick={() => setIsModalOpened(!isModalOpened)}>&times;</CloseCross>
          <Input
            onChange={setInputText}
            placeholder="Enter a task..."
            ref={this.inputRef}
            inputText={inputText}
          />
          <DateInput onChange={setDate} />
          <AddingButton onClick={inputText ? handleBtnClick : this.focusTextInput}>
            Add
          </AddingButton>
        </AddingPanel>
      </ModalWrapper>
    );
  }
}

export default AddingTodoPanel;
