import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Header from './Header';
import Cart from './Cart';

function Store({ data }) {

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
                        {data.map((item, index) => (
                            <div className='item-img' key={index}>
                                <img src={item.image}
                                    alt={item.name}
                                    style={{ width: '250px', height: '250px', borderRadius: '20px' }} />
                                {item.name} - ${item.price}{' '}
                                <Button style={btnStyle}
                                    onClick={() => addToCart(item)}
                                >Add to Cart
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                getTotalPrice={getTotalPrice}
                cartItemCount={cartItemCount}
            />
        </div>
    );
}

export default Store;

