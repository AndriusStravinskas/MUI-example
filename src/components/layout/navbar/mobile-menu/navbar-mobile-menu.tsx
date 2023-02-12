import React, { useState } from 'react';
import {
  Toolbar,
  IconButton,
  Box,
  Drawer,
  useMediaQuery,
  type Theme,
  MenuList,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';
import NavbarMobileLink from './navbar-mobile-link';
import NavbarMobileLinksAccordion from './navbar-mobile-links-accordion';
import { getActiveLinksGroupTitle } from '../helpers';
import { expandBreakpoint, linksData, linksGroup } from '../links-data';

const NavbarMobileMenu: React.FC = () => {
  const { pathname } = useLocation();
  const ActiveLinkGroupTitle = getActiveLinksGroupTitle(pathname);

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const isExpanded = useMediaQuery((theme: Theme) => theme.breakpoints.up(expandBreakpoint));
  const [openedAccordionTitle, setOpenedAccordionTitle] = React.useState(ActiveLinkGroupTitle);

  const closeMenu = () => setMenuOpen(false);
  const handleAccordionAction = (title: string) => (_: React.SyntheticEvent, open: boolean) => {
    setOpenedAccordionTitle(open ? title : null);
  };

  const Icon = menuOpen ? CloseIcon : MenuIcon;

  return (
    <>
      <IconButton
        sx={{ display: { xs: 'flex', [expandBreakpoint]: 'none' } }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Icon sx={{ color: 'common.white', fontSize: 25 }} />
      </IconButton>
      <Drawer
        anchor="top"
        open={menuOpen && !isExpanded}
        onClose={() => setMenuOpen(false)}
      >
        <Box sx={{ width: '100vw' }}>
          <Toolbar />
          <MenuList sx={{ p: 0 }}>
            {linksData.map(({ link, text }) => (
              <MenuItem
                key={link}
                onClick={closeMenu}
                sx={{ p: 0 }}
              >
                <NavbarMobileLink to={link}>{text}</NavbarMobileLink>
              </MenuItem>
            ))}
            {linksGroup.map((linkGroup) => (
              <NavbarMobileLinksAccordion
                key={linkGroup.title}
                title={linkGroup.title}
                linksData={linkGroup.linksData}
                closeMenu={closeMenu}
                expanded={openedAccordionTitle === linkGroup.title}
                onChange={handleAccordionAction(linkGroup.title)}
                hasActiveLink={ActiveLinkGroupTitle === linkGroup.title}

              />
            ))}
          </MenuList>
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarMobileMenu;
