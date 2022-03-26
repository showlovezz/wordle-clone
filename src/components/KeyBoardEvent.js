import React from 'react';

import Keyboard from './Keyboard';
import GameOver from './GameOver';
import { useAppContext } from './AppProvider';

const KeyboardEvent = () => {
  const { gameOver } = useAppContext();

  return <>{gameOver.gameOver ? <GameOver /> : <Keyboard />}</>;
};

export default KeyboardEvent;
