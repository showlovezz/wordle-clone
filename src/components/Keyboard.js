import React, { useCallback, useEffect } from 'react';

import Key from './Key';
import { useAppContext } from './AppProvider';

const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
const allKey = new Set([...keys1, ...keys2, ...keys3]);

const Keyboard = () => {
  const { onSelectLetter, onDeleteLetter, onEnter, disabledLetters } = useAppContext();

  const handleKeyboard = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        onEnter();
      } else if (event.key === 'Backspace') {
        onDeleteLetter();
      } else {
        if (allKey.has(event.key.toUpperCase())) {
          onSelectLetter(event.key.toUpperCase());
        }
      }
      // eslint-disable-next-line prettier/prettier
    },[onEnter, onDeleteLetter, onSelectLetter]);


  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);

    return () => {
      document.removeEventListener('keydown', handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
      <div className='line1'>
        {keys1.map((key, index) => {
          return <Key keyVal={key} key={index} disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className='line2'>
        {keys2.map((key, index) => {
          return <Key keyVal={key} key={index} disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className='line3'>
        <Key keyVal='ENTER' bigKey />
        {keys3.map((key, index) => {
          return <Key keyVal={key} key={index} disabled={disabledLetters.includes(key)} />;
        })}
        <Key keyVal='DELETE' bigKey />
      </div>
    </div>
  );
};

export default Keyboard;
