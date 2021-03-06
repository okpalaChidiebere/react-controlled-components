import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component{

    static propTypes = {
        handleOnSubmit: PropTypes.func.isRequired,
    }

    state = {
        newShoppingItem: ''
    };

    handleChange = event => {
        event.preventDefault();
        this.setState({ newShoppingItem: event.target.value });
    };

    inputIsEmpty = () => {
        return this.state.newShoppingItem === '';
    };

    handleOnsubmit = (event) => {
        this.props.handleOnSubmit(event, this.state.newShoppingItem)
    }

    render(){

        return(
            <form onSubmit={this.handleOnsubmit}>
                <input
                type="text"
                placeholder="Enter New Item"
                value={this.state.newShoppingItem}
                onChange={this.handleChange}
                />
                <button disabled={this.inputIsEmpty()}>Add</button>
                {/*JSON.stringify(this.state)*/}
            </form>
        )
    }
}

export default ShoppingCart