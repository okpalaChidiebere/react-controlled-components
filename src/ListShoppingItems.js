import React from 'react';
import ShoppingItem from './ShoppingItem';

const ListShoppingItems = props => {
    return (
        <ol className="item-list">
        {props.items.map((item, index) => <ShoppingItem key={index} item={item} />)}
        </ol>
    )
}
  
  export default ListShoppingItems  