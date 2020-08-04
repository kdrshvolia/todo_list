import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoApp from '../reducers';
import { loadState, saveState } from '../../localStorage';

const store = createStore(todoApp, composeWithDevTools());

store.subscribe(() => {
  saveState('todos', store.getState().todos);
});

export default store;
