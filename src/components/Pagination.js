import React from 'react';
import { Pagination, Stack } from '@mui/material';

const PaginationComponent = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (event, page) => {
    onPageChange(page);
  };

  return (
    <Stack spacing={2} sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        shape="rounded"
      />
    </Stack>
  );
};

export default PaginationComponent;
