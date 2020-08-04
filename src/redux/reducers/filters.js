import { SET_FILTER_BY_TEXT } from '../actions/actionTypes';

const filters = (state = { text: '', date: '' }, action) => {
  switch (action.type) {
    case SET_FILTER_BY_TEXT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export default filters;
