// src/pages/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid, CircularProgress, Box, Rating } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

// Sample product details
const productDetailsData = {
  // ... (your existing product details data)
  1: {
    name: 'Leather Jacket',
    price: 120,
    description: 'Stylish leather jacket for men, perfect for any season. Durable and comfortable.',
    image_url: require('../assets/Leatherjacket.jpg'),
    rating: 4.5,
    size: 'M',
    color: 'Black',
    material: 'Genuine Leather',
  },
  2: {
    name: 'Denim Jeans',
    price: 60,
    description: 'Classic denim jeans with a modern fit. Perfect for casual outings.',
    image_url: require('../assets/DenimeJens.jpg'),
    rating: 4.2,
    size: 'L',
    color: 'Blue',
    material: 'Cotton',
  },
  3: {
    name: 'Summer Dress',
    price: 80,
    description: 'Lightweight summer dress with a floral pattern. Ideal for warm weather.',
    image_url: require('../assets/SummerDress.jpg'),
    rating: 4.7,
    size: 'S',
    color: 'Red',
    material: 'Cotton',
  },
  4: {
    name: 'Sneakers',
    price: 50,
    description: 'Comfortable and stylish sneakers for everyday wear.',
    image_url: require('../assets/Sneakers.jpg'),
    rating: 4.0,
    size: '10',
    color: 'White',
    material: 'Synthetic',
  },
  5: {
    name: 'Wool Sweater',
    price: 100,
    description: 'Warm wool sweater for cold days. Soft and cozy.',
    image_url: require('../assets/WoolSweater.jpg'),
    rating: 4.3,
    size: 'M',
    color: 'Grey',
    material: 'Wool',
  },
  6: {
    name: 'Sunglasses',
    price: 25,
    description: 'Stylish sunglasses with UV protection. Perfect for sunny days.',
    image_url: require('../assets/Sunglasses.jpg'),
    rating: 4.5,
    size: 'One Size',
    color: 'Black',
    material: 'Plastic',
  },
  7: {
    name: 'Leather Belt',
    price: 40,
    description: 'Genuine leather belt with a classic buckle. Durable and stylish.',
    image_url: require('../assets/LeatherBelt.jpg'),
    rating: 4.4,
    size: '32',
    color: 'Brown',
    material: 'Leather',
  },
  8: {
    name: 'Handbag',
    price: 75,
    description: 'Trendy handbag with ample space for all your essentials.',
    image_url: require('../assets/Handbag.jpg'),
    rating: 4.6,
    size: 'One Size',
    color: 'Black',
    material: 'Faux Leather',
  },
  9: {
    name: 'Running Shoes',
    price: 90,
    description: 'Lightweight running shoes designed for performance and comfort.',
    image_url: require('../assets/RunningShoes.jpg'),
    rating: 4.8,
    size: '10',
    color: 'Blue',
    material: 'Mesh',
  },
  10: {
    name: 'Casual Shirt',
    price: 55,
    description: 'Comfortable casual shirt for everyday wear. Stylish and breathable.',
    image_url: require('../assets/CasualShirt.jpg'),
    rating: 4.1,
    size: 'L',
    color: 'White',
    material: 'Cotton',
  },
};

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL parameters
  const [product, setProduct] = useState(null); // State for product data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error messages
  const [userRating, setUserRating] = useState(0); // State for user rating
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Fetch product details based on ID
    const fetchProduct = () => {
      const productDetail = productDetailsData[id]; // Get product details from the sample data
      if (productDetail) {
        setProduct(productDetail); // Set product data
      } else {
        setError('Product not found'); // Handle error if product not found
      }
      setLoading(false); // Loading complete
    };

    fetchProduct(); // Call fetch function
  }, [id]);

  const handleRatingChange = (event, newValue) => {
    setUserRating(newValue); // Update user rating
  };

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  // Display error message if there's an error fetching product data
  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  // Render product details if data is successfully fetched
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={12} md={6}>
        <img
          src={product.image_url} // Image URL of the product
          alt={product.name} // Alt text for accessibility
          style={{ width: '100%', borderRadius: 8 }} // Image styles
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" sx={{ mb: 1 }}>{product.name}</Typography>
        <Typography variant="h6" color="text.primary" sx={{ mb: 2 }}>₹{product.price}</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>{product.description}</Typography>
        
        {/* Product Ratings */}
        <Typography variant="body2" sx={{ mb: 1 }}>Rating: {product.rating} out of 5</Typography>
        <Rating
          name="user-rating"
          value={userRating}
          onChange={handleRatingChange}
          precision={0.5}
          size="large"
        />
        
        <Typography variant="body2" sx={{ mt: 2 }}>Size: {product.size}</Typography>
        <Typography variant="body2">Color: {product.color}</Typography>
        <Typography variant="body2">Material: {product.material}</Typography>
        
        {/* Offers Section */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Offers:</Typography>
          <Typography>Bank Offer: Upto ₹4,000.00 discount on SBI Credit Cards</Typography>
          <Typography>No Cost EMI: Upto ₹459.27 EMI interest savings on Amazon Pay ICICI Bank</Typography>
          <Typography>Partner Offers: Great Indian Festival offer by U.S. Polo Association</Typography>
        </Box>
        
        {/* Add to Cart Button */}
        <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => {/* Add your add to cart functionality here */}}>
          Add to Cart
        </Button>
        
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit Rating
        </Button>
        <Button variant="outlined" sx={{ mt: 2, ml: 2 }} onClick={() => navigate('/')}>
          Back to Products
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
