import React from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import NavbarDesktopItem from './navbar-desktop-item';
import { expandBreakpoint, linksData, linksGroup } from './links-data';
import { getActiveLinksGroupTitle } from './helpers';
import NavbarDesktoplink from './navbar-desktop-link';
import NavbarDesktopDropDown from './navbar-desktop-dropdown';

const NavbarDesktopMenu: React.FC = () => {
  const { pathname } = useLocation();
  const activeLinkGroupTitle = getActiveLinksGroupTitle(pathname);
  return (
    <Box sx={{
      display: { xs: 'none', [expandBreakpoint]: 'flex' },
      alignSelf: 'stretch',
    }}
    >
      {linksData.map(({ link, text }) => (
        <NavbarDesktopItem key={link} className={pathname === link ? 'active' : undefined}>
          <NavbarDesktoplink to={link}>{text}</NavbarDesktoplink>
        </NavbarDesktopItem>
      ))}
      {linksGroup.map(({ title, linksData: links }) => (
        <NavbarDesktopItem key={title} className={title === activeLinkGroupTitle ? 'active' : undefined}>
          <NavbarDesktopDropDown linksData={links} title={title} />
        </NavbarDesktopItem>
      ))}
    </Box>
  );
};

export default NavbarDesktopMenu;
