import styled from 'styled-components';
import { CustomButton } from '../Button/StyledComponents';

const ItemWrapper = styled.div`
  font-family: Roboto;
  max-width: 600px;
  background: ${(props) => (props.completed ? '#ececec' : '#fff')};
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  &:hover {
    background: #e3f5f1;
    border: 1px solid #95c8bd;
    transition: 0.5s;
  }
`;

const DeleteButton = styled(CustomButton)`
  background: #ff674d;
  &:hover {
    background: #ff573a;
    transition: 0.5s;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  margin: 0 10px;
`;

const CustomSpan = styled.span`
  color: #b3d4d4;
  display: inline-block;
  margin: 0 5px 0 0;
`;

const ItemText = styled.p`
  margin: 10px 0;
  padding: 0;
  text-align: left;
  font-weight: bold;
  color: ${(props) => (props.completed ? '#9C9C9C' : '#000')};
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

const ItemDate = styled.p`
  margin: 0;
  font-size: 12px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export { ItemWrapper, InfoWrapper, DeleteButton, CustomSpan, ItemInfo, ItemText, ItemDate };
