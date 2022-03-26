import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import { boardDefault, generateWordSet } from '../Words';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({ gameOver: false, guessedWord: false });

  const currentWord = 'RIGHT';

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
    });
  }, []);

  const onSelectLetter = useCallback(
    (keyVal) => {
      if (currAttempt.letterPos > 4) return;

      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
      // eslint-disable-next-line prettier/prettier
    }, [board, currAttempt]);

  const onDeleteLetter = useCallback(() => {
    if (currAttempt.letterPos === 0) return;

    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = '';
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  }, [board, currAttempt]);

  const onEnter = useCallback(() => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = '';
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert('Word Not Found');
    }

    if (currWord === currentWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  }, [currAttempt.attempt, currAttempt.letterPos, board, wordSet]);

  return (
    <AppContext.Provider
      value={{
        board,
        setBoard,
        currAttempt,
        setCurrAttempt,
        onSelectLetter,
        onDeleteLetter,
        onEnter,
        currentWord,
        disabledLetters,
        setDisabledLetters,
        gameOver,
        setGameOver,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
