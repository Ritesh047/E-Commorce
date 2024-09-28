// src/components/Footer.js
import React from 'react';
import { Typography, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="body2" color="text.secondary">
        &copy; 2024 E-Commerce Site
      </Typography>
      <Link href="#" color="inherit">Customer Service</Link> | 
      <Link href="#" color="inherit">Privacy Policy</Link> | 
      <Link href="#" color="inherit">Terms of Service</Link>
    </Container>
  );
};

export default Footer;
