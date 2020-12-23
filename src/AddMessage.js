import React from 'react';
import PropTypes from 'prop-types';

class AddMessage extends React.Component{

    static propTypes = {
        onHandleSendMessage: PropTypes.func.isRequired,
    }

    state = {
        text: ''
    }

    /*
    If the user did not type anything, he/she should not be
    allowed to submit.
    */
    isDisabled = () => {
        const { text } = this.state;
        return text === '';
    };

    handleInputChange = event => {

        this.setState(currState => ({
          text: event.target.value,
        }));
    };

    handleSendMessage = (event) => {
        event.preventDefault();

        //Call the callback function that was passed to this component from ChatBox
        this.props.onHandleSendMessage(this.state.text)
    }

    render(){

        return(
            <form className="input-group"  onSubmit={this.handleSendMessage}>
                <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.text} onChange={this.handleInputChange}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
            </form>
        )
    }
}

export default AddMessage