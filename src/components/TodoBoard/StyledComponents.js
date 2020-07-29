import styled from 'styled-components';
import Button from '../Button/Button';
import { CustomButton } from '../Button/StyledComponents';

const Wrapper = styled.div`
  background: #f1f1f1;
`;

const AddingButton = styled(CustomButton)`
  background: #95c8bd;
  &:hover {
    background: #8abab0;
    transition: 0.5s;
  }
`;

const OpenModalButton = styled(CustomButton)`
  background: #8aaaba;
  width: 150px;
  margin: 10px;

  &:hover {
    background: #75a5bd;
    transition: 0.5s;
  }
`;

export { Wrapper, AddingButton, OpenModalButton };
