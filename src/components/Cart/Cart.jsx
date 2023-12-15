// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css';

// eslint-disable-next-line react/prop-types
const Cart = ({cart}) => {
    // const cart = props.cart; option 1
    // const { cart } = props; option 2

    let totalPrice = 0;
    let totalShipping = 0;

    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4 className='order-title'>Order summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6 className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;