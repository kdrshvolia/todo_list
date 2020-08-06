import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actionTypes';

const addTodo = (text, date) => {
  return {
    type: ADD_TODO,
    payload: { text, date, isCompleted: false, id: uuidv4() },
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export { addTodo, deleteTodo, toggleTodo };
