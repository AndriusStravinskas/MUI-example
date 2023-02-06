import React from 'react';
import TypographyPage from 'pages/typography-page';
import ButtonPage from 'pages/button-page';
import { Box } from '@mui/material';

const App = () => (
  <Box sx={{
    padding: 4,
  }}
  >
    {/* <TypographyPage /> */}
    <ButtonPage />
  </Box>
);

export default App;
