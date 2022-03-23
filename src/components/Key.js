import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../App';

const Key = ({ keyVal, bigKey }) => {
  const { onSelectLetter, onDeleteLetter, onEnter } = useContext(AppContext);
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
    <div className='key' id={bigKey && 'big'} onClick={selectLetter}>
      {keyVal}
    </div>
  );
};

Key.propTypes = {
  keyVal: PropTypes.string.isRequired,
  bigKey: PropTypes.bool,
};

export default Key;
