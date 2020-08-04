const persistedState = JSON.parse(localStorage.getItem('todos')) || [];

const todos = (state = persistedState, action) => {
  return state;
};

export default todos;
