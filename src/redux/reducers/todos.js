// import { deleteTodo } from '../actions/todosActions';
import { DELETE_TODO, TOGGLE_TODO } from '../actions/actionTypes';

const persistedState = JSON.parse(localStorage.getItem('todos')) || [];

const todos = (state = persistedState, action) => {
  switch (action.type) {
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo,
      );
    default:
      return state;
  }
};

export default todos;
