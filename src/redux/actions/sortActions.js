import { SET_SORTING_TYPE } from './actionTypes';

const setSortingType = (type) => {
  return {
    type: SET_SORTING_TYPE,
    payload: type,
  };
};

export { setSortingType };
