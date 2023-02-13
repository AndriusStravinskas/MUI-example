import React from 'react';
import { Box, styled } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '250px',
  backgroundColor: theme.palette.neutral.darker,
}));

const ResponsivenessPage = () => (
  <>
    <Box
      sx={{
        height: '300px',
        width: {
          xs: 100, // 0
          xm: 200, // 600
          md: 300, // 900
          lg: 400, // 1200
          xl: 500, // 1536
        },
        bgcolor: 'secondary.dark',
      }}
    />
    <StyledBox />
  </>
);

export default ResponsivenessPage;
