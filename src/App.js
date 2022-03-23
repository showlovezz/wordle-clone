import React from 'react';

import Board from './components/Board';
import Keyboard from './components/Keyboard';
import AppProvider from './components/AppProvider';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppProvider>
        <div className='game'>
          <Board />
          <Keyboard />
        </div>
      </AppProvider>
    </div>
  );
};

export default App;
