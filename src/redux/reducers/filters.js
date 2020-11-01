import { SET_FILTER_BY_TEXT, SET_FILTER_BY_DATE } from '../actions/actionTypes';

const filters = (state = { text: '', date: '' }, action) => {
  switch (action.type) {
    case SET_FILTER_BY_TEXT:
      return { ...state, text: action.payload };
    case SET_FILTER_BY_DATE:
      return { ...state, date: action.payload };
    default:
      return state;
  }
};

export default filters;
