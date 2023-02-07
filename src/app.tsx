import React from 'react';
import { Box } from '@mui/material';
// import TypographyPage from 'pages/typography-page';
// import ButtonPage from 'pages/button-page';
// import TextFieldPage from 'pages/textfield-page';
// import SelectPage from 'pages/select-page';
// import RadioButtonPage from 'pages/radio-button-page';
import CheckboxPage from 'pages/Checkbox-page';

const App = () => (
  <ReactRouterProvider />
  <Box sx={{
    padding: 4,
  }}
  >
    {/* <TypographyPage /> */}
    {/* <ButtonPage /> */}
    {/* <TextFieldPage /> */}
    {/* <SelectPage /> */}
    {/* <RadioButtonPage /> */}
    <CheckboxPage />
  </Box>
);

export default App;
