// src/components/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems } = useCart(); // Ensure this is correct

  if (!cartItems || cartItems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.product_id}>
            {item.name} - Quantity: {item.quantity} - Price: ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
