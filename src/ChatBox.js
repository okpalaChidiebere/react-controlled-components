import React from 'react'
import ListMessages from './ListMessages'
import AddMessage from './AddMessage'
import PropTypes from 'prop-types'

/*
This component passes a callback function to AddMessage (called "onMessage")
because we will need to add new messages to the message history in BOTH chat windows.
Because BOTH chat windows need access to the messages piece of state, that piece of
state will live in the DisplayChat.js file. That means that the callback function
will be passed from the displayChat Component all the way down to the AddMessage Component.
*/
const ChatBox = props => {
    const { senderUsername, messages, onHandleAddMessage } = props; //FYI we can destrunct an expression which an arrow function is. onHandleAddMessage is an arrow function

    const handleAddMessage = newMessageText => {

        const newMessage = {
            username: props.senderUsername,
            text: newMessageText,
        };

        //The callback is getting called.
        onHandleAddMessage(newMessage)
    }

    return (
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{senderUsername}</div>
            <ListMessages  messages={messages} senderUsername={senderUsername}/>
            <AddMessage onHandleSendMessage={handleAddMessage}/>
        </div>   
    )
}


ChatBox.propTypes = {
    messages: PropTypes.array.isRequired,
    senderUsername: PropTypes.string.isRequired,
    onHandleAddMessage: PropTypes.func.isRequired,
};
  
export default ChatBox