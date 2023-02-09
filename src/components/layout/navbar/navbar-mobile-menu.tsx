import React, { useState } from 'react';
import {
  Toolbar,
  IconButton,
  Box,
  type Breakpoint,
  Drawer,
  useMediaQuery,
  type Theme,
  MenuList,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavbarMobileLink from './navbar-mobile-link';
import type LinkData from './link-data';
import NavbarMobileLinksAccordion from './navbar-mobile-links-accordion';

type NavbarMobileMenuProps = {
  expandBreakpoint: Breakpoint,
  linksdata: LinkData[],
  linksGroup: {
    title: string,
    linksData: LinkData[],
  }[]
};

const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({
  expandBreakpoint,
  linksdata,
  linksGroup,
}) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const isExpanded = useMediaQuery((theme: Theme) => theme.breakpoints.up(expandBreakpoint));
  return (
    <>
      <IconButton
        sx={{ display: { xs: 'flex', [expandBreakpoint]: 'none' } }}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        {drawerOpen
          ? <CloseIcon sx={{ color: 'common.white', fontSize: 25 }} />
          : <MenuIcon sx={{ color: 'common.white', fontSize: 25 }} />}
      </IconButton>
      <Drawer
        anchor="top"
        open={drawerOpen && !isExpanded}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: '100vw' }}>
          <Toolbar />
          <MenuList sx={{ p: 0 }}>
            {linksdata.map(({ link, text }) => (
              <MenuItem
                key={link}
                onClick={() => setDrawerOpen(false)}
                sx={{ p: 0 }}
              >
                <NavbarMobileLink to={link}>{text}</NavbarMobileLink>
              </MenuItem>
            ))}
            {linksGroup.map((linkGroup) => (
              <NavbarMobileLinksAccordion
                title={linkGroup.title}
                linksData={linkGroup.linksData}
                closeDrawer={() => setDrawerOpen(false)}
              />
            ))}
          </MenuList>
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarMobileMenu;
