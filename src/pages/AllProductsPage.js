import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import ProductFilter from '../components/ProductFilter';
import PaginationComponent from '../components/PaginationComponent';
import { Box, Typography } from '@mui/material';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: '',
    priceRange: [0, 10000],
    availability: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);

  // Fetch products whenever filters or page change
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products', {
          params: {
            category: filters.category,
            company: filters.company,
            rating: filters.rating,
            minPrice: filters.priceRange[0],
            maxPrice: filters.priceRange[1],
            availability: filters.availability,
            page: currentPage,
            limit: itemsPerPage,
          },
        });
        setProducts(response.data.products);
        setTotalItems(response.data.totalItems);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [filters, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterApply = () => {
    setCurrentPage(1); // Reset to the first page whenever filters are applied
    // The products will be re-fetched automatically because `filters` is a dependency in the useEffect
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Top Products
      </Typography>
      <ProductFilter
        filters={filters}
        setFilters={setFilters}
        onFilterApply={handleFilterApply}
      />
      <ProductList products={products} />
      <PaginationComponent
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};

export default AllProductsPage;
