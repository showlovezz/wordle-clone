import React from 'react';

import { useAppContext } from './AppProvider';

const GameOver = () => {
  const { gameOver, currAttempt, currentWord } = useAppContext();

  return (
    <div className='gameOver'>
      <h3>{gameOver.guessedWord ? 'You correctly guessed!' : 'You failed'}</h3>
      <h1>Correct: {currentWord}</h1>
      {gameOver.guessedWord && <h3>You guessed in {currAttempt.attempt} attempts</h3>}
    </div>
  );
};

export default GameOver;
