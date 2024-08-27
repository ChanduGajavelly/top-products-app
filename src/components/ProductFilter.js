import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Slider, Button } from '@mui/material';

const ProductFilter = ({ filters, setFilters, onFilterApply }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (key, value) => {
    setLocalFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const handleApplyFilters = () => {
    setFilters(localFilters); // Update filters in the parent component
    onFilterApply(); // Trigger filter application in the parent component
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
      {/* Category Filter */}
      <FormControl fullWidth sx={{ minWidth: 200 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={localFilters.category}
          onChange={(e) => handleChange('category', e.target.value)}
        >
          <MenuItem value="">All Categories</MenuItem>
          <MenuItem value="Laptop">Laptop</MenuItem>
          <MenuItem value="Phone">Phone</MenuItem>
          <MenuItem value="Tablet">Tablet</MenuItem>
          <MenuItem value="Headset">Headset</MenuItem>
        </Select>
      </FormControl>

      {/* Company Filter */}
      <FormControl fullWidth sx={{ minWidth: 200 }}>
        <InputLabel>Company</InputLabel>
        <Select
          value={localFilters.company}
          onChange={(e) => handleChange('company', e.target.value)}
        >
          <MenuItem value="">All Companies</MenuItem>
          <MenuItem value="AMZ">Amazon</MenuItem>
          <MenuItem value="FLP">Flipkart</MenuItem>
          <MenuItem value="SNP">Snapdeal</MenuItem>
          <MenuItem value="MYN">Myntra</MenuItem>
          <MenuItem value="AZO">Azo</MenuItem>
        </Select>
      </FormControl>

      {/* Rating Filter */}
      <FormControl fullWidth sx={{ minWidth: 200 }}>
        <InputLabel>Rating</InputLabel>
        <Select
          value={localFilters.rating}
          onChange={(e) => handleChange('rating', e.target.value)}
        >
          <MenuItem value="">Any Rating</MenuItem>
          <MenuItem value={4}>4 Stars & Up</MenuItem>
          <MenuItem value={3}>3 Stars & Up</MenuItem>
          <MenuItem value={2}>2 Stars & Up</MenuItem>
          <MenuItem value={1}>1 Star & Up</MenuItem>
        </Select>
      </FormControl>

      {/* Price Range Filter */}
      <Box sx={{ minWidth: 300 }}>
        <InputLabel>Price Range</InputLabel>
        <Slider
          value={localFilters.priceRange}
          onChange={(e, newValue) => handleChange('priceRange', newValue)}
          valueLabelDisplay="auto"
          min={0}
          max={10000}
        />
      </Box>

      {/* Availability Filter */}
      <FormControl fullWidth sx={{ minWidth: 200 }}>
        <InputLabel>Availability</InputLabel>
        <Select
          value={localFilters.availability}
          onChange={(e) => handleChange('availability', e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="yes">In Stock</MenuItem>
          <MenuItem value="no">Out of Stock</MenuItem>
        </Select>
      </FormControl>

      {/* Apply Filters Button */}
      <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 200 }}>
        <Button variant="contained" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </Box>
    </Box>
  );
};

export default ProductFilter;
