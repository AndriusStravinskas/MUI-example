import React from 'react';
import {
  AppBar,
  Toolbar,
  type Breakpoint,
} from '@mui/material';
import routes from 'navigation/routes';
import type LinkData from './link-data';
import NavbarMobileMenu from './navbar-mobile-menu';
import NavbarDesktopMenu from './navbar-desktop-menu';

const expandBreakpoint: Breakpoint = 'lg';

const linksData: LinkData[] = [
  { link: routes.HomePage, text: 'Home' },
];

const presentanionalPagesData = [
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
];

const controlsPagesData = [
  { link: routes.ButtonPage, text: 'Button' },
  { link: routes.TextFieldPage, text: 'Text Field' },
  { link: routes.SelectPage, text: 'Select' },
  { link: routes.RadioButtonPage, text: 'Radios' },
  { link: routes.CheckboxPage, text: 'Checkbox' },
  { link: routes.AutoCompletePage, text: 'AutoComplete' },
  { link: routes.SwitchPage, text: 'Switch' },
];
const wrapersPagesData = [
  { link: routes.BoxPage, text: 'Box' },
  { link: routes.CardPage, text: 'Card' },
  { link: routes.ImageListPage, text: 'Image List' },
  { link: routes.DrawerPage, text: 'Drawer' },
  { link: routes.NavbarPage, text: 'Navbar' },

];
const statefulPagesData = [
  { link: routes.BottomNavigationPage, text: 'Bottom Navigation' },
  { link: routes.AccordionPage, text: 'Accordion' },
  { link: routes.ListPage, text: 'List' },
  { link: routes.TablePage, text: 'Table' },
];

const Navbar = () => (
  <AppBar position="sticky">
    <Toolbar
      sx={{
        justifyContent: { xs: 'flex-end', [expandBreakpoint]: 'flex-start' },
      }}
    >
      <NavbarDesktopMenu
        expandBreakpoint={expandBreakpoint}
        linksData={linksData}
      />
      <NavbarMobileMenu
        expandBreakpoint={expandBreakpoint}
        linksdata={linksData}
        linksGroup={[
          {
            title: 'Presentanional',
            linksData: presentanionalPagesData,
          },
          {
            title: 'Controls',
            linksData: controlsPagesData,
          },
          {
            title: 'Wrapers',
            linksData: wrapersPagesData,
          },
          {
            title: 'Stateful',
            linksData: statefulPagesData,
          },
        ]}
      />
    </Toolbar>
  </AppBar>
);

export default Navbar;

/* 1. [0.1] - pamokos darbo atkartojimas PAŽINGSNIUI
  1.1 Išskaidyti viso puslapio nuorodų duomenis į 2-5 grupes
  1.2 Sukurti NavbarMobileMenu komponentą
    * įsitraukti komponentus/bibliotekas
    * aprašyti propsus
    * panaudoti komponentą tame komponente iš kurio jis buvo iškeltas (Navbar)
  1.3 Sukurti NavbarDesktopMenu komponentą
    * įsitraukti komponentus/bibliotekas
    * aprašyti propsus
    * panaudoti komponentą tame komponente iš kurio jis buvo iškeltas (Navbar) */
