import React from 'react';
import { Box, AppBar, Toolbar } from '@mui/material';
import routes from 'navigation/routes';

const linksData = [
  { link: routes.HomePage, text: 'Home' },
  { link: routes.TypographyPage, text: 'Typography' },
  { link: routes.ButtonPage, text: 'Button' },
  { link: routes.TextFieldPage, text: 'Text Field' },
  { link: routes.SelectPage, text: 'Select' },
  { link: routes.RadioButtonPage, text: 'Radios' },
  { link: routes.CheckboxPage, text: 'Checkbox' },
];

const Navbar = () => (
  <AppBar position="sticky">
    <Toolbar>
      {
        linksData.map(({ link, text }) => (
          <Box
            key={link}
            sx={{
              alignSelf: 'stretch',
              display: 'inline-grid',
              placeItems: 'center',
              px: 1.5,
              cursor: 'pointer',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            {text}
          </Box>
        ))
      }

    </Toolbar>
  </AppBar>
);

export default Navbar;
