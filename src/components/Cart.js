// src/components/Cart.js
import React from 'react';
import { List, ListItem, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      <List>
        {cartItems.map(item => (
          <ListItem key={item.product_id}>
            <Typography variant="body1">{item.name} - {item.quantity} x ${item.price}</Typography>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" component={Link} to="/checkout">
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default Cart;
