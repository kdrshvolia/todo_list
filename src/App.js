import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import { withTodoBoard } from './hocs/withTodoBoard/withTodoBoard';
import TodoBoard from './components/TodoBoard/TodoBoard';

function App() {
  const EnhancedTodoBoard = withTodoBoard(TodoBoard);
  return (
    <div className="App">
      <EnhancedTodoBoard />
    </div>
  );
}

export default App;
