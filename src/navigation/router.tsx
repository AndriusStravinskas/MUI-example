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
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.TypographyPage,
        element: <TypographyPage />,
      },
      {
        path: routes.ButtonPage,
        element: <ButtonPage />,
      },
      {
        path: routes.TextFieldPage,
        element: <TextFieldPage />,
      },
      {
        path: routes.SelectPage,
        element: <SelectPage />,
      },
      {
        path: routes.RadioButtonPage,
        element: <RadioButtonPage />,
      },
      {
        path: routes.CheckboxPage,
        element: <CheckboxPage />,
      },
    ],
  },

]);

export default router;
