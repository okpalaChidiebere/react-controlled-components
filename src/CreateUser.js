import React from 'react';
import PropTypes from 'prop-types';


class CreateUser extends React.Component{

    static propTypes = {
        addUser: PropTypes.func.isRequired,
        userNameExists: PropTypes.func.isRequired,
    }

    state = {
        user: {
            firstName: '',
            lastName: '',
            userName: '',
        },
        userExists: false,
    }

    // if all of the input fields are not filed up, this method will return false maing the add button to be disabled
    inputIsEmpty = () => {
        const { firstName, lastName, userName } = this.state.user;
        return firstName === '' || lastName === '' || userName === '';
    };

    handleOnsubmit = (event) => {
        event.preventDefault(); //this will prevent the page from reloading

        const userExists = this.props.userNameExists(this.state.user.userName);

        if (!userExists) {
            this.props.addUser(this.state.user)
        }

        //We now update the userExists stae so that we can hide or show the error text. React handels the re-rendering of the UI very well when the state updates
        this.setState(() => ({
            userExists,
        }));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
    
        this.setState(currState => ({
          ...currState,
          user: {
            ...currState.user,
            [name]: value,
          },
        }));
    };


    render(){
        const { firstName, lastName, userName } = this.state.user;
        
        return (
            <div>
                <form onSubmit={this.handleOnsubmit}>
                    <input
                    type="text"
                    name="firstName"
                    placeholder="Firstname"
                    value={firstName}
                    onChange={this.handleInputChange}
                    />
                    <input
                    type="text"
                    name="lastName"
                    placeholder="Lastname"
                    value={lastName}
                    onChange={this.handleInputChange}
                    />
                    <input
                    type="text"
                    name="userName"
                    placeholder="Username"
                    value={userName}
                    onChange={this.handleInputChange}
                    />
                    <button disabled={this.inputIsEmpty()}>Add User</button>
                    {JSON.stringify(this.state)}
                </form>
                {this.state.userExists ? ( //we have an error
                <p className="error">You cannot add a user that already exists.</p>
                ) : (
                '' //No error message
                )}
          </div>
        )
    }
}

/*CreateUser.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
};*/

export default CreateUser