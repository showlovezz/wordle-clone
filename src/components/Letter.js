import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../App';

const Letter = ({ letterPos, attemptVal }) => {
  const { board } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  return <div className='letter'>{letter}</div>;
};

Letter.propTypes = {
  letterPos: PropTypes.number.isRequired,
  attemptVal: PropTypes.number.isRequired,
};

export default Letter;
