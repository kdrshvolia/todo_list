import React from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard/TodoBoard';
import { GlobalStyle } from './StyledComponents';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoBoard />
    </div>
  );
}

export default App;
