import React from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types';

const ListUsers = props => {
    return ( //userName will be unique so we can use it as key for the list
        <ol className="item-list">
        {props.users.map((user) => <UserItem key={user.userName} user={user} showGamesPlayed={props.showGamesPlayed}/>)}
        </ol>
    )
}

ListUsers.propTypes = {
    users: PropTypes.array.isRequired,
};
  
  export default ListUsers 