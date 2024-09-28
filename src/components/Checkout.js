// src/components/Checkout.js
import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

const Checkout = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <TextField label="Address" fullWidth margin="normal" />
      <TextField label="Payment Method" fullWidth margin="normal" />
      <Button variant="contained" color="primary">
        Place Order
      </Button>
    </div>
  );
};

export default Checkout;
