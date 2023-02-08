import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layout/navbar-layout';
import TypographyPage from 'pages/typography-page';
import HomePage from 'pages/home-page';
import TextFieldPage from 'pages/textfield-page';
import CheckboxPage from 'pages/Checkbox-page';
import SwitchPage from 'pages/switch-page';
import RatingPage from 'pages/rating-page';
import AutoCompletePage from 'pages/autocomplete-page';
import BoxPage from 'pages/layout-page';
import CardPage from 'pages/card-page';
import AccordionPage from 'pages/accordion-page';
import ImageListPage from 'pages/image-list-page';
import NavbarPage from 'pages/navbar-page';
import RadioButtonPage from '../pages/radio-button-page';
import routes from './routes';
import ButtonPage from '../pages/button-page';
import SelectPage from '../pages/select-page';

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
      {
        path: routes.SwitchPage,
        element: <SwitchPage />,
      },
      {
        path: routes.RatingPage,
        element: <RatingPage />,
      },
      {
        path: routes.AutoCompletePage,
        element: <AutoCompletePage />,
      },
      {
        path: routes.BoxPage,
        element: <BoxPage />,
      },
      {
        path: routes.CardPage,
        element: <CardPage />,
      },
      {
        path: routes.AccordionPage,
        element: <AccordionPage />,
      },
      {
        path: routes.ImageListPage,
        element: <ImageListPage />,
      },
      {
        path: routes.NavbarPage,
        element: <NavbarPage />,
      },
    ],
  },

]);

export default router;
