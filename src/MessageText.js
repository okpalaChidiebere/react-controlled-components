import React from 'react';
import PropTypes from 'prop-types';

/*
This presentational component can just be a Stateless Functional Component.

You'll see this pattern often - a component for a thing and a component for a list
of those things.
*/
const MessageText = props => {

    const { message, senderUsername, key } = props;
    return (
        <li
        key={key}
        className={
        message.username === senderUsername ? 'message sender' : 'message recipient'
        }
        >
            <p>{`${message.username}: ${message.text}`}</p>
        </li>
    )
};

MessageText.propTypes = {
    senderUsername: PropTypes.string.isRequired,
    message: PropTypes.object.isRequired,
};

export default MessageText
