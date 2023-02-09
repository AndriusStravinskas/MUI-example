import React from 'react';
import {
  Box,
  type Breakpoint,
} from '@mui/material';
import NavbarLink from './navbar-link';
import type LinkData from './link-data';

type NavbarDesktopMenuProps = {
  expandBreakpoint: Breakpoint,
  linksData: LinkData[],
};

const NavbarDesktopMenu: React.FC<NavbarDesktopMenuProps> = ({
  expandBreakpoint,
  linksData,
}) => (
  <Box sx={{
    display: { xs: 'none', [expandBreakpoint]: 'flex' },
    alignSelf: 'stretch',
  }}
  >
    {linksData.map(({ link, text }) => (
      <NavbarLink key={link} to={link}>{text}</NavbarLink>))}
  </Box>
);

export default NavbarDesktopMenu;
