import React from "react";
import {createStructuredSelector} from 'reselect';

import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg";

import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import "./cart-icon.styles.scss";

const CartIcon = ({toggleCartHidden, itemsCount}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemsCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:() => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
