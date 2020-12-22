import React from 'react';
import PropTypes from 'prop-types';

/*
This presentational component can just be a Stateless Functional Component.
*/
const HideGameScore = props => {

    const handleChangeButtonText = event => {
      props.onButtontextChange();
    }

  return (//
    <button className="smallButton" onClick={handleChangeButtonText}>
        {props.showGamesPlayed ? 'Hide ' : 'Show '}
        the Number of Games Played
    </button>
  );
};

HideGameScore.propTypes = {
    onButtontextChange: PropTypes.func.isRequired,

};

export default HideGameScore;
