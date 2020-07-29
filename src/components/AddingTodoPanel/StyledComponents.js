import styled from 'styled-components';

const AddingPanel = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  flex-basis: 100%;
`;

const ModalWrapper = styled.div`
  display: ${(props) => (props.isModalOpened ? 'flex' : 'none')}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  align-items: center;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const CloseCross = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: black;
    text-decoration: none;
    transition: 0.5s;
  }
`;

export { AddingPanel, ModalWrapper, CloseCross };
