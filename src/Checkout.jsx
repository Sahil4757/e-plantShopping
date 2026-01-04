import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Checkout.css';

const Checkout = ({ onBack }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const calculateTotalAmount = (cart) => {
        let total = 0;
        cart.forEach(item => {
            const cost = parseFloat(item.cost.substring(1));
            total += cost * item.quantity;
        });
        return total.toFixed(2);
    };

    const handlePlaceOrder = () => {
        alert('Order placed successfully! (This is a demo)');
        // In a real app, we would clear cart and redirect
    };

    return (
        <div className="checkout-container">
            <div className="order-summary">
                <h2>Checkout Bill</h2>
                <div className="order-items">
                    {cart.map(item => (
                        <div key={item.name} className="order-item">
                            <img src={item.image} alt={item.name} className="order-item-image" />
                            <div className="order-item-details">
                                <h3>{item.name}</h3>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: {item.cost} × {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="order-total">
                    <h3>Total Amount: ${calculateTotalAmount(cart)}</h3>
                </div>
            </div>

            <div className="checkout-buttons">
                <button type="button" onClick={onBack} className="back-button">
                    Back to Cart
                </button>
                <button type="button" onClick={handlePlaceOrder} className="place-order-button">
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default Checkout;