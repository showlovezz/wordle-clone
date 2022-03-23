import React, { useCallback, useEffect, useMemo } from 'react';

import Key from './Key';
import { useAppContext } from './AppProvider';

const Keyboard = () => {
  const { onSelectLetter, onDeleteLetter, onEnter } = useAppContext();

  const keys1 = useMemo(() => {
    return ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  }, []);
  const keys2 = useMemo(() => {
    return ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  }, []);
  const keys3 = useMemo(() => {
    return ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  }, []);

  const handleKeyboard = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        onEnter();
      } else if (event.key === 'Backspace') {
        onDeleteLetter();
      } else {
        keys1.forEach((key) => {
          if (event.key.toUpperCase() === key.toUpperCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toUpperCase() === key.toUpperCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toUpperCase() === key.toUpperCase()) {
            onSelectLetter(key);
          }
        });
      }
      // eslint-disable-next-line prettier/prettier
    },[onEnter, onDeleteLetter, onSelectLetter, keys1, keys2, keys3]);

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
          return <Key keyVal={key} key={index} />;
        })}
      </div>
      <div className='line2'>
        {keys2.map((key, index) => {
          return <Key keyVal={key} key={index} />;
        })}
      </div>
      <div className='line3'>
        <Key keyVal='ENTER' bigKey />
        {keys3.map((key, index) => {
          return <Key keyVal={key} key={index} />;
        })}
        <Key keyVal='DELETE' bigKey />
      </div>
    </div>
  );
};

export default Keyboard;
