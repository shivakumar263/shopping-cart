import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from './Header';

function Cart(props) {

    const [cartItemCount, setCartItemCount] = useState(0);

    const [cart, setCart] = useState([]);

    const addToCart = (item,) => {
        setCart([...cart, item]);
        setCartItemCount(prevCount => prevCount + 1);
    };

    const removeFromCart = (itemIndex) => {
        const updatedCart = cart.filter((item, index) => index !== itemIndex);
        setCart(updatedCart);
        setCartItemCount(prevCount => prevCount - 1);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    const btnStyle = {
        color: 'white',
        backgroundColor: '#141E46',
      };

    return (
        <div>
            <div>
                <Header cartItemCount={cartItemCount} />
            </div>
            <div className='shopping-items'>
                <div className='shopping-item'>
                    <h2>Available Items</h2>
                    <div className='item-name'>
                            {props.data.map((item, index) => (
                                <div className='item-img' key={index}>
                                    <img src={item.image} alt={item.name} style={{ width: '250px', height: '250px',borderRadius: '20px'}} />
                                    {item.name} - ${item.price}{' '}
                                    <Button style={btnStyle} onClick={() => addToCart(item)}>Add to Cart</Button>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div>
                <div className='shopping-cart'>
                    <h2>Cart</h2>
                    <div className='cart-item'>
                        <ul>
                            {cart.map((item, index) => (
                                <div className='item-list' key={index}>
                                    <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
                                    {item.name} - ${item.price}{' '}
                                    <DeleteIcon className='delete-icon' variant="outlined" fontSize='large'
                                        onClick={() => removeFromCart(index)}
                                    />
                                </div>
                            ))}
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
        </div>
    );
}

export default Cart;

