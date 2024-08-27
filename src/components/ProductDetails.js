import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Card, CardContent, CardMedia, Typography, CircularProgress } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h5">Product not found.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <Card sx={{ maxWidth: 800, display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        <CardMedia
          component="img"
          sx={{ width: { xs: '100%', md: 400 }, height: { xs: 300, md: 'auto' } }}
          image={product.image || 'https://via.placeholder.com/400'}
          alt={product.productName}
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h4" component="div">
            {product.productName}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {product.company}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px' }}>
            Category: {product.category}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px' }}>
            Price: ${product.price}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px' }}>
            Rating: {product.rating} ★
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px' }}>
            Discount: {product.discount}%
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px', color: product.availability === 'yes' ? 'green' : 'red' }}>
            Availability: {product.availability === 'yes' ? 'In Stock' : 'Out of Stock'}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetails;
