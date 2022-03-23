import React, { useState, createContext, useCallback } from 'react';

import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault } from './Words';
import './App.css';

export const AppContext = createContext();

const App = () => {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });

  const onSelectLetter = useCallback(
    (keyVal) => {
      if (currAttempt.letterPos > 4) return;

      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
      // eslint-disable-next-line prettier/prettier
    },[board, currAttempt],
  );

  const onDeleteLetter = useCallback(() => {
    if (currAttempt.letterPos === 0) return;

    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = '';
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  }, [board, currAttempt]);

  const onEnter = useCallback(() => {
    if (currAttempt.letterPos !== 5) return;

    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
  }, [currAttempt.attempt, currAttempt.letterPos]);

  return (
    <div className='App'>
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onDeleteLetter,
          onEnter,
        }}
      >
        <div className='game'>
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
};

export default App;
