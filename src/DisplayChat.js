import React from 'react';
import ChatBox from "./ChatBox";

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions4.md` file.
*/


class DisplayChat extends React.Component {

    

    //users = [{ username: 'Amy' }, { username: 'John' }];


    state = {
        messages: [], //keeps track of the number of questions the users got correct
        users: [{ username: 'Amy' }, { username: 'John' }],  //keeps track of number of question asked
    };

    onHandleAddMessage = (newMessage) => {
        this.setState(prev => ({
            messages: [...prev.messages, newMessage],
        }));
    };

  render() {

    const chatWindows = this.state.users.map(user => (
        <ChatBox
        key={user.username}
        messages={this.state.messages}
        senderUsername={user.username} 
        onHandleAddMessage={this.onHandleAddMessage}
        />
    ));

    return (
        <div className="chat-container">
            {chatWindows}
            {/*JSON.stringify(this.state)*/}
        </div>
    );
  }
}

export default DisplayChat;
