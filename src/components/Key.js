import React from 'react';
import PropTypes from 'prop-types';

import { useAppContext } from './AppProvider';

const Key = ({ keyVal, bigKey, disabled }) => {
  const { onSelectLetter, onDeleteLetter, onEnter } = useAppContext();

  // 這裡要思考，是否還需要用 useCallback 包
  const selectLetter = () => {
    if (keyVal === 'ENTER') {
      onEnter();
    } else if (keyVal === 'DELETE') {
      onDeleteLetter();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div className='key' id={bigKey ? 'big' : disabled && 'disabled'} onClick={selectLetter}>
      {keyVal}
    </div>
  );
};

Key.propTypes = {
  keyVal: PropTypes.string.isRequired,
  bigKey: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Key;
