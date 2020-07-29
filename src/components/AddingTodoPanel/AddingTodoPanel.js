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
    const { setInputText, setDate, addTodo, isModalOpened, setModalOpen, inputText } = this.props;
    return (
      <ModalWrapper isModalOpened={isModalOpened}>
        <AddingPanel>
          <CloseCross onClick={setModalOpen}>&times;</CloseCross>
          <Input onChange={setInputText} placeholder="Enter a task..." ref={this.inputRef} />
          <DateInput onChange={setDate} />
          <AddingButton onClick={inputText ? addTodo : this.focusTextInput}>Add</AddingButton>
        </AddingPanel>
      </ModalWrapper>
    );
  }
}

export default AddingTodoPanel;
