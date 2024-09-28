// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Branding / Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-Commerce Site
        </Typography>

        {/* Search Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: '400px',
            width: '100%',
            mr: 2,
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Search..."
            sx={{
              backgroundColor: 'white',
              borderRadius: '4px',
            }}
            InputProps={{
              endAdornment: (
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/" sx={{ mr: 1 }}>
            Home
          </Button>
          <IconButton color="inherit" component={Link} to="/cart">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/profile"> {/* Corrected profile link */}
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
