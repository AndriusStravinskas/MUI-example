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
import LinkPage from 'pages/Link-page';
import BreadcrumbsPage from 'pages/breadcrumbs-page';
import DrawerPage from 'pages/drawer-page';
import SpeedDialPage from 'pages/speed-dial-page';
import AvatarPage from 'pages/avatar-page';
import BadgePage from 'pages/badge-page';
import ListPage from 'pages/list-page';
import ChipPage from 'pages/Chip-page';
import TooltipPage from 'pages/tooltip-page';
import TablePage from 'pages/Table-page';
import AlertPage from 'pages/Alert-page';
import ProgressPage from 'pages/progress-page';
import SekeletonPage from 'pages/skeleton-page';
import LoadingButtonPage from 'pages/loading-button-page';
import PickerPage from 'pages/picker-page';
import TabsPage from 'pages/tabs-page';
import TimelinePage from 'pages/timeline-page';
import MasonryPage from 'pages/masonry-page';
import ResponsivenessPage from 'pages/responsiveness-page';
import RadioButtonPage from '../pages/radio-button-page';
import routes from './routes';
import ButtonPage from '../pages/button-page';
import SelectPage from '../pages/select-page';
import BottomNavigationPage from '../pages/bottom-navigation';
import SnackbarPage from '../pages/snackbar-page';
import DialogPage from '../pages/dialog-page';
import DateRangePickerPage from '../pages/date-range-picker-page';

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
      {
        path: routes.LinkPage,
        element: <LinkPage />,
      },
      {
        path: routes.BreadcrumbsPage,
        element: <BreadcrumbsPage />,
      },
      {
        path: routes.DrawerPage,
        element: <DrawerPage />,
      },
      {
        path: routes.SpeedDialPage,
        element: <SpeedDialPage />,
      },
      {
        path: routes.BottomNavigationPage,
        element: <BottomNavigationPage />,
      },
      {
        path: routes.AvatarPage,
        element: <AvatarPage />,
      },
      {
        path: routes.BadgePage,
        element: <BadgePage />,
      },
      {
        path: routes.ListPage,
        element: <ListPage />,
      },
      {
        path: routes.ChipPage,
        element: <ChipPage />,
      },
      {
        path: routes.TooltipPage,
        element: <TooltipPage />,
      },
      {
        path: routes.TablePage,
        element: <TablePage />,
      },
      {
        path: routes.AlertPage,
        element: <AlertPage />,
      },
      {
        path: routes.SnackbarPage,
        element: <SnackbarPage />,
      },
      {
        path: routes.DialogPage,
        element: <DialogPage />,
      },
      {
        path: routes.ProgressPage,
        element: <ProgressPage />,
      },
      {
        path: routes.SekeletonPage,
        element: <SekeletonPage />,
      },
      {
        path: routes.LoadingButtonPage,
        element: <LoadingButtonPage />,
      },
      {
        path: routes.PickerPage,
        element: <PickerPage />,
      },
      {
        path: routes.DateRangePickerPage,
        element: <DateRangePickerPage />,
      },
      {
        path: routes.TabsPage,
        element: <TabsPage />,
      },
      {
        path: routes.TimelinePage,
        element: <TimelinePage />,
      },
      {
        path: routes.MasonryPage,
        element: <MasonryPage />,
      },
      {
        path: routes.ResponsivenessPage,
        element: <ResponsivenessPage />,
      },
    ],
  },

]);

export default router;
