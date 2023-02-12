import React from 'react';
import {
  AppBar,
  Toolbar,
} from '@mui/material';
import NavbarMobileMenu from './mobile-menu/navbar-mobile-menu';
import NavbarDesktopMenu from './Desktop-menu/navbar-desktop-menu';
import { expandBreakpoint } from './links-data';

const Navbar = () => (
  <AppBar position="sticky">
    <Toolbar
      sx={{
        justifyContent: { xs: 'flex-end', [expandBreakpoint]: 'flex-start' },
      }}
    >
      <NavbarDesktopMenu />
      <NavbarMobileMenu />
    </Toolbar>
  </AppBar>
);

export default Navbar;
