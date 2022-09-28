import React from 'react';
import './Order.css'
const Order = ({cart}) => {
    let quantity = 0;
    for(const meal of cart){
        quantity = meal.quantity + 1;
    }
    return (
        <div className='cart'>
            <h2>Order List</h2>
            <p>Selected Items: {quantity}</p>
            <h4>Your Orders:</h4>
            {
                cart.map(name => <li>{name.strMeal}</li>)
            }
        </div>
    );
};

export default Order;