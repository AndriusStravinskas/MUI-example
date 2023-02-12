import React from 'react';
import {
  Box,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import NavbarDesktopDropDownLink from './navbar-desktop-dropdown-link';
import LinkData from '../link-data';

type NavbarDesktopDropDownProps = {
  title: string,
  linksData: LinkData[]
};

const NavbarDesktopDropDown: React.FC<NavbarDesktopDropDownProps> = ({
  title,
  linksData,
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = React.useState(false);

  const Icon = open ? ArrowDropUpIcon : ArrowDropDownIcon;

  return (
    <Box ref={containerRef} onClick={() => setOpen(!open)} sx={{ pr: 0 }}>
      <Box sx={{ display: 'flex', gap: 0.5 }}>
        <Typography>{title}</Typography>
        <Icon />
      </Box>
      <Menu
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={containerRef.current}
      >
        {linksData.map(({ link, text }) => (
          <MenuItem key={link} sx={{ p: 0 }}>
            <NavbarDesktopDropDownLink key={link} to={link}>
              {text}
            </NavbarDesktopDropDownLink>
          </MenuItem>
        ))}

      </Menu>
    </Box>
  );
};

export default NavbarDesktopDropDown;
