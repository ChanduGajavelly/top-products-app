import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <ProductDetails productId={id} />
    </div>
  );
};

export default ProductDetailsPage;
