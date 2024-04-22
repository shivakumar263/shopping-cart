import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart({ cart, removeFromCart, getTotalPrice, cartItemCount }) {

    return (
        <div>
            <div className='shopping-cart'>
                <h2>Cart</h2>
                <div className='cart-item'>
                    <ul>
                        {cart.map((item, index) => {
                            return <div className='item-list' key={index}>
                                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
                                {item.name} - ${item.price}{' '}
                                <DeleteIcon className='delete-icon' variant="outlined" fontSize='large'
                                    onClick={() => removeFromCart(index)}
                                />
                            </div>
                        })}
                    </ul>
                </div>
                <div className='item-price'>
                    <div className='total'>
                        <h3>Total items: {cartItemCount}</h3>
                        <h3>Total price: ${getTotalPrice()}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;