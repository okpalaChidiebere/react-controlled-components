import React from 'react';
import ListUsers from './ListUsers'
import CreateUser from "./CreateUser";
import HideGameScore from './HideGameScore'

class Game extends React.Component{

    state = {
        users: [], //we will only save the user information for the user in this array because e will only display list of username and the numberOfGamesPlayed
        showGamesPlayed: true,
    };

    userNameExists = currUserName => {
        const users = this.state.users;
        for (let user of users) {
          if (user.userName === currUserName) {
            return true;
          }
        }
        return false;
    };

    addUser = (newUser) => {
        newUser.numGamesPlayed = 0; // add a new attribute. so now we have {fistName: someVale, lastName: someVale, username: somevalue, numGamesPlayed: 0}
        this.setState(oldState => ({
            users: [...oldState.users, newUser],
        }));
    };

    onButtontextChange = () => {
        this.setState(oldState => ({ //based on this new state(could be true or false) the button text will change 
          showGamesPlayed: !oldState.showGamesPlayed,
        }));
    };

    render(){

        return(
            <div>
                <h2>Game</h2>
                <CreateUser addUser={this.addUser} userNameExists={this.userNameExists}/>
                <HideGameScore showGamesPlayed={this.state.showGamesPlayed} onButtontextChange={this.onButtontextChange}/>
                <p className="items">Users Added</p>
                <ListUsers users={this.state.users} showGamesPlayed={this.state.showGamesPlayed}/>
            </div>
        )

    }
}

export default Game