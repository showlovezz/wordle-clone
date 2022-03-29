import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useAppContext } from './AppProvider';

const Letter = ({ letterPos, attemptVal }) => {
  const { board, currentWord, currAttempt, setDisabledLetters } = useAppContext();
  const letter = board[attemptVal][letterPos];

  const correct = currentWord.toUpperCase()[letterPos] === letter;
  const almost = !correct && letter !== '' && currentWord.includes(letter);
  const letterState = currAttempt.attempt > attemptVal && (correct ? 'correct' : almost ? 'almost' : 'error');

  useEffect(() => {
    if (letter !== '' && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt, letter, correct, almost, setDisabledLetters]);

  return (
    <div className='letter' id={letterState}>
      {letter}
    </div>
  );
};

Letter.propTypes = {
  letterPos: PropTypes.number.isRequired,
  attemptVal: PropTypes.number.isRequired,
};

export default Letter;
