import React from 'react';
import ListShoppingItems from './ListShoppingItems'
import ShoppingCart from './ShoppingCart'

class DisplayShopping extends React.Component {
    state = {
      items: [],
    };
  
    addItem = (event, item) => {
      this.setState(oldState => ({
        items: [...oldState.items, item],
      }));
    };
  
    deleteLastItem = event => {
      this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
    };
  
  
    noItemsFound = () => {
      return this.state.items.length === 0;
    };
  
    render() {
      return (
        <div >
          <h2>Shopping List</h2>
          <ShoppingCart handleOnSubmit={this.addItem}/>
          <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
            Delete Last Item
          </button>
          <p className="items">Items</p>
          <ListShoppingItems items={this.state.items}/>
        </div>
      );
    }
  }
  
  export default DisplayShopping;
  