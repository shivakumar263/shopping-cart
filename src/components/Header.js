import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header({ cartItemCount }) {
  return (
    <header>
      <h1>Gadget Cart</h1>
      <div className="cart">
        <ShoppingCartIcon />
        <span>{cartItemCount}</span>
      </div>
    </header>
  );
}

export default Header;
