import React from 'react';
import { Box, AppBar, Toolbar } from '@mui/material';

const Navbar = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Box sx={{
        alignSelf: 'stretch',
        display: 'inline-grid',
        placeItems: 'center',
        px: 1.5,
        cursor: 'pointer',
        '&:hover': {
          bgcolor: 'primary.dark',
        },
      }}
      >
        nuoroda 3000
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
