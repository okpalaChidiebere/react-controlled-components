import React from 'react';
import MessageText from './MessageText';
import PropTypes from 'prop-types';

const ListMessages = props => {
    const { messages, senderUsername } = props;

    return (
        <ul className="message-list">
        {messages.map((message, index) => <MessageText key={index} message={message} senderUsername={senderUsername}/>)}
        </ul>
    )
}

ListMessages.propTypes = {
    messages: PropTypes.array.isRequired,
    senderUsername: PropTypes.string.isRequired,
};
  
export default ListMessages  