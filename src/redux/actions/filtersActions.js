import { SET_FILTER_BY_DATE, SET_FILTER_BY_TEXT } from './actionTypes';

const setFilterByText = (text) => {
  return {
    type: SET_FILTER_BY_TEXT,
    payload: text,
  };
};

const setFilterByDate = (date) => {
  return {
    type: SET_FILTER_BY_DATE,
    payload: date,
  };
};

export { setFilterByText, setFilterByDate };
