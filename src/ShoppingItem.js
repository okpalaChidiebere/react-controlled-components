import React from 'react';

/*
This presentational component can just be a Stateless Functional Component.

You'll see this pattern often - a component for a thing and a component for a list
of those things.
*/
const ShoppingItem = props => {
  return <li>{props.item}</li>;
};

export default ShoppingItem;