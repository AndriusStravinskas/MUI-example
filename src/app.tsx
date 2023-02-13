import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { RouterProvider } from 'react-router-dom';
import router from 'navigation/router';

const App = () => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <RouterProvider router={router} />
  </LocalizationProvider>

);

export default App;
