// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';

// Importing images from the assets/photos directory
import leatherJacket from '../assets/Leatherjacket.jpg';
import denimJeans from '../assets/DenimeJens.jpg';
import summerDress from '../assets/SummerDress.jpg';
import sneakers from '../assets/Sneakers.jpg';
import woolSweater from '../assets/WoolSweater.jpg';
import sunglasses from '../assets/Sunglasses.jpg';
import leatherBelt from '../assets/LeatherBelt.jpg';
import handbag from '../assets/Handbag.jpg';
import runningShoes from '../assets/RunningShoes.jpg';
import casualShirt from '../assets/CasualShirt.jpg';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // setProducts(fashionProducts);

  //   // Uncomment this when the API is ready
  //   // axios.get('/api/products')
  //   //   .then(response => setProducts(response.data))
  //   //   .catch(error => console.error(error));
  // }, []);

  useEffect(() => {
    // Product data with local image imports
    const fashionProducts = [
      { product_id: 1, name: 'Leather Jacket', price: 120, image: leatherJacket },
      { product_id: 2, name: 'Denim Jeans', price: 60, image: denimJeans },
      { product_id: 3, name: 'Summer Dress', price: 80, image: summerDress },
      { product_id: 4, name: 'Sneakers', price: 50, image: sneakers },
      { product_id: 5, name: 'Wool Sweater', price: 100, image: woolSweater },
      { product_id: 6, name: 'Sunglasses', price: 25, image: sunglasses },
      { product_id: 7, name: 'Leather Belt', price: 40, image: leatherBelt },
      { product_id: 8, name: 'Handbag', price: 75, image: handbag },
      { product_id: 9, name: 'Running Shoes', price: 90, image: runningShoes },
      { product_id: 10, name: 'Casual Shirt', price: 55, image: casualShirt }
    ];

    setProducts(fashionProducts);
  }, []);

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.product_id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
