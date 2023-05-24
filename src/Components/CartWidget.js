import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

let CartWidget = ({ itemCount }) => {
    return (
      <div className="cart-widget">
        <FaShoppingCart className="cart-icon" />
        {itemCount > 0 && <span className="item-count">{itemCount}</span>}
      </div>
    );
  }

export default CartWidget;