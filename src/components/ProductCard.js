// src/components/ProductCard.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        border: '1px solid #ddd',
        borderRadius: 2,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: 4,
        },
      }}
    >
      <CardMedia
        component="img"
        alt={product.name}
        height="200"
        image={product.image} // Use local image passed from ProductList
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        {product.description && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {product.description}
          </Typography>
        )}
        <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
          ${product.price.toFixed(2)} {/* Ensures price always has two decimal places */}
        </Typography>
        <Box sx={{ display: 'flex', mb: 2 }}>
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              sx={{ color: index < (product.rating || 0) ? 'gold' : 'gray' }} // Handles rating or defaults to 0
            />
          ))}
        </Box>
        <Button
          size="small"
          component={Link}
          to={`/product/${product.product_id}`}
          variant="contained"
          color="primary"
          aria-label={`View details of ${product.name}`}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
