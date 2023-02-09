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
import { useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();
  let activeGroupTitle: string | false = false;
  for (let i = 0; i < linksGroup.length; i += 1) {
    const linkGroup = linksGroup[i];
    const hasActiveLink = linkGroup.linksData
      .map<string>(({ link }) => link)
      .includes(pathname);

    if (hasActiveLink) {
      activeGroupTitle = linkGroup.title;
      break;
    }
  }

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const isExpanded = useMediaQuery((theme: Theme) => theme.breakpoints.up(expandBreakpoint));

  const [
    openedAccordionTitle,
    setOpenedAccordionTitle,
  ] = React.useState<string | false>(activeGroupTitle);

  const closeMenu = () => setMenuOpen(false);
  const handleAccordionAction = (groupTitle: string) => (
    event: React.SyntheticEvent,
    accordionOpen: boolean,
  ) => {
    setOpenedAccordionTitle(accordionOpen ? groupTitle : false);
  };

  return (
    <>
      <IconButton
        sx={{ display: { xs: 'flex', [expandBreakpoint]: 'none' } }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen
          ? <CloseIcon sx={{ color: 'common.white', fontSize: 25 }} />
          : <MenuIcon sx={{ color: 'common.white', fontSize: 25 }} />}
      </IconButton>
      <Drawer
        anchor="top"
        open={menuOpen && !isExpanded}
        onClose={() => setMenuOpen(false)}
      >
        <Box sx={{ width: '100vw' }}>
          <Toolbar />
          <MenuList sx={{ p: 0 }}>
            {linksdata.map(({ link, text }) => (
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
                hasActiveLink={activeGroupTitle === linkGroup.title}
                onChange={handleAccordionAction(linkGroup.title)}

              />
            ))}
          </MenuList>
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarMobileMenu;
