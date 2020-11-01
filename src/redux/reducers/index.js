import { combineReducers } from 'redux';
import todos from './todos';
import filters from './filters';
import { sortOptions, sort } from './sort';

const todoApp = combineReducers({ todos, filters, sortOptions, sort });

export default todoApp;
