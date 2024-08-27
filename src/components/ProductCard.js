import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '16px' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image || 'https://via.placeholder.com/200'}
        alt={product.productName}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Company: {product.company}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {product.category}
        </Typography>
        <Typography variant="body1" color="text.primary">
          Price: ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {product.rating} ★
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="body2" color={product.availability === 'yes' ? 'green' : 'red'}>
          Availability: {product.availability === 'yes' ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={`/product/${product.id}`}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
