import React from 'react';
import PropTypes from 'prop-types';

/*
This presentational component can just be a Stateless Functional Component.

You'll see this pattern often - a component for a thing and a component for a list
of those things.
*/
const ShoppingItem = props => {
  return <li>{props.item}</li>;
};

ShoppingItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default ShoppingItem;