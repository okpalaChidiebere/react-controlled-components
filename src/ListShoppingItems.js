import React from 'react';
import ShoppingItem from './ShoppingItem';
import PropTypes from 'prop-types';

const ListShoppingItems = props => {
    return (
        <ol className="item-list">
        {props.items.map((item, index) => <ShoppingItem key={index} item={item} />)}
        </ol>
    )
}

ListShoppingItems.propTypes = {
    items: PropTypes.array.isRequired,
};
  
  export default ListShoppingItems  