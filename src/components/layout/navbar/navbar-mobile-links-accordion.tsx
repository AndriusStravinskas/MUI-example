import React from 'react';
import {
  MenuList,
  MenuItem,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavbarMobileLink from './navbar-mobile-link';
import LinkData from './link-data';

type NavbarMobileLinksAccordionProps = {
  title: string,
  linksData: LinkData[],
  closeDrawer: VoidFunction,
};

const NavbarMobileLinksAccordion: React.FC<NavbarMobileLinksAccordionProps> = ({
  title,
  linksData,
  closeDrawer,
}) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>{title}</Typography>
    </AccordionSummary>

    <AccordionDetails>
      <MenuList sx={{ p: 0 }}>
        {linksData.map(({ link, text }) => (
          <MenuItem
            key={link}
            onClick={() => closeDrawer}
            sx={{ p: 0 }}
          >
            <NavbarMobileLink to={link}>{text}</NavbarMobileLink>
          </MenuItem>
        ))}
      </MenuList>
    </AccordionDetails>
  </Accordion>
);

export default NavbarMobileLinksAccordion;
