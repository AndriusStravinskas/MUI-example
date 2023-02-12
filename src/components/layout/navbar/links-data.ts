import { Breakpoint } from '@mui/material';
import routes from 'navigation/routes';
import LinkData from './link-data';

export const linksData: LinkData[] = [
  { link: routes.HomePage, text: 'Home' },
];

export const linksGroup = [
  {
    title: 'Presentanional',
    linksData: [
      { link: routes.TypographyPage, text: 'Typography' },
      { link: routes.BoxPage, text: 'Box' },
      { link: routes.RatingPage, text: 'Rating' },
      { link: routes.SpeedDialPage, text: 'Speed Dial' },
      { link: routes.AvatarPage, text: 'Avatar' },
      { link: routes.LinkPage, text: 'Link' },
      { link: routes.BreadcrumbsPage, text: 'Breadcrumbs' },
      { link: routes.BadgePage, text: 'Badge' },
      { link: routes.ChipPage, text: 'Chip' },
      { link: routes.TooltipPage, text: 'Tooltip' },
      { link: routes.AlertPage, text: 'Alert' },
      { link: routes.SnackbarPage, text: 'Snackbar' },
    ],
  },
  {
    title: 'Controls',
    linksData: [
      { link: routes.ButtonPage, text: 'Button' },
      { link: routes.TextFieldPage, text: 'Text Field' },
      { link: routes.SelectPage, text: 'Select' },
      { link: routes.RadioButtonPage, text: 'Radios' },
      { link: routes.CheckboxPage, text: 'Checkbox' },
      { link: routes.AutoCompletePage, text: 'AutoComplete' },
      { link: routes.SwitchPage, text: 'Switch' },
    ],
  },
  {
    title: 'Wrapers',
    linksData: [
      { link: routes.BoxPage, text: 'Box' },
      { link: routes.CardPage, text: 'Card' },
      { link: routes.ImageListPage, text: 'Image List' },
      { link: routes.DrawerPage, text: 'Drawer' },
      { link: routes.NavbarPage, text: 'Navbar' },

    ],
  },
  {
    title: 'Stateful',
    linksData: [
      { link: routes.BottomNavigationPage, text: 'Bottom Navigation' },
      { link: routes.AccordionPage, text: 'Accordion' },
      { link: routes.ListPage, text: 'List' },
      { link: routes.TablePage, text: 'Table' },
    ],
  },
];

export const expandBreakpoint: Breakpoint = 'lg';
