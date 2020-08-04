import { loadState } from '../../localStorage';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/actionTypes';

const persistedState = loadState('todos');

const todos = (state = persistedState, action) => {
  switch (action.type) {
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo,
      );
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todos;
