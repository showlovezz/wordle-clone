import React from 'react';
import PropTypes from 'prop-types';

import { useAppContext } from './AppProvider';

const Letter = ({ letterPos, attemptVal }) => {
  const { board } = useAppContext();
  const letter = board[attemptVal][letterPos];

  return <div className='letter'>{letter}</div>;
};

Letter.propTypes = {
  letterPos: PropTypes.number.isRequired,
  attemptVal: PropTypes.number.isRequired,
};

export default Letter;
