import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layout/navbar-layout';
import TypographyPage from 'pages/typography-page';
import HomePage from 'pages/home-page';
import TextFieldPage from 'pages/textfield-page';
import CheckboxPage from 'pages/Checkbox-page';
import ButtonPage from '../pages/button-page';
import SelectPage from '../pages/select-page';
import RadioButtonPage from '../pages/radio-button-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/typography',
        element: <TypographyPage />,
      },
      {
        path: '/button',
        element: <ButtonPage />,
      },
      {
        path: '/textField',
        element: <TextFieldPage />,
      },
      {
        path: '/select',
        element: <SelectPage />,
      },
      {
        path: '/radios',
        element: <RadioButtonPage />,
      },
      {
        path: '/checkbox',
        element: <CheckboxPage />,
      },
    ],
  },

]);

export default router;
