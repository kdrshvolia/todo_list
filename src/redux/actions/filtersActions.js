import { SET_FILTER_BY_TEXT } from './actionTypes';

const setFilterByText = (text) => {
  return {
    type: SET_FILTER_BY_TEXT,
    payload: text,
  };
};

export { setFilterByText };
