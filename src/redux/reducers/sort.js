import { SET_SORTING_TYPE } from '../actions/actionTypes';

const sortOptions = (
  state = [
    { type: 'default', value: 'Default' },
    { type: 'date', value: 'By date' },
    { type: 'text', value: 'By text' },
  ],
) => {
  return state;
};

const sort = (state = sortOptions()[0].type, action) => {
  switch (action.type) {
    case SET_SORTING_TYPE:
      return action.payload;
    default:
      return state;
  }
};

export { sortOptions, sort };
