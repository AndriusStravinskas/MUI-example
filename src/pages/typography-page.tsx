import React from 'react';
import { Box, Typography } from '@mui/material';

const TypographyPage = () => (
  <Box sx={{
    textAlign: 'center',
    mx: 5,
  }}
  >

    <Typography variant="h1">h1 Heading</Typography>
    <Typography variant="h2">h2 Heading</Typography>
    <Typography variant="h3">h3 Heading</Typography>
    <Typography variant="h4" component="h1" gutterBottom>
      h4 Heading
    </Typography>
    <Typography variant="h5">h5 Heading</Typography>

    <Typography variant="subtitle1">Sub title 1</Typography>
    <Typography variant="subtitle2">Sub title 2</Typography>

    <Typography variant="body1">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Accusamus, delectus? Quos expedita molestias quam deserunt,
      reiciendis quibusdam nobis. Beatae doloribus minus dolorum
      molestias magni vitae fugiat officiis corporis id libero!
    </Typography>
    <Typography variant="body2">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Accusamus, delectus? Quos expedita molestias quam deserunt,
      reiciendis quibusdam nobis. Beatae doloribus minus dolorum
      molestias magni vitae fugiat officiis corporis id libero!
    </Typography>
  </Box>
);

export default TypographyPage;
