import styled from 'styled-components';

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

  &:hover {
    background: #e3f5f1;
    border: 1px solid #95c8bd;
    transition: 0.5s;
  }
`;

const DeleteButton = styled.button`
  font-family: Roboto;
  width: 80px;
  color: #fff;
  padding: 5px;
  box-sizing: border-box;
  background: #ff674d;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  height: 40px;

  &:hover {
    background: #ff573a;
    transition: 0.5s;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
`;

const CustomSpan = styled.span`
  color: #b3d4d4;
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

export { ItemWrapper, DeleteButton, CustomSpan, ItemInfo, ItemText, ItemDate };
