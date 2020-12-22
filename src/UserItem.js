import React from 'react';
import PropTypes from 'prop-types';

/*
This presentational component can just be a Stateless Functional Component.

You'll see this pattern often - a component for a thing and a component for a list
of those things.
*/
const UserItem = props => {
  return (
    <li>
      <p>Username: {props.user.userName}</p>
      <p>Number of Games Played: { //better way to write if else in one line in JS
      props.showGamesPlayed ? props.user.numGamesPlayed : '*'}</p>
    </li>
  )
};

UserItem.propTypes = {
  showGamesPlayed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default UserItem;