import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Breakpoint,
  Drawer,
  useMediaQuery,
  type Theme,
  MenuList,
  MenuItem,
} from '@mui/material';
import routes from 'navigation/routes';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavbarLink from './navbar-link';
import NavbarMobileLink from './navbar-mobile-link';

const linksData = [
  { link: routes.HomePage, text: 'Home' },
  { link: routes.TypographyPage, text: 'Typography' },
  { link: routes.ButtonPage, text: 'Button' },
  { link: routes.TextFieldPage, text: 'Text Field' },
  { link: routes.SelectPage, text: 'Select' },
  { link: routes.RadioButtonPage, text: 'Radios' },
  { link: routes.CheckboxPage, text: 'Checkbox' },
  { link: routes.SwitchPage, text: 'Switch' },
  { link: routes.RatingPage, text: 'Rating' },
  { link: routes.AutoCompletePage, text: 'AutoComplete' },
  { link: routes.BoxPage, text: 'Box' },
  { link: routes.CardPage, text: 'Card' },
  { link: routes.AccordionPage, text: 'Accordion' },
  { link: routes.ImageListPage, text: 'Image List' },
  { link: routes.NavbarPage, text: 'Navbar' },
  { link: routes.LinkPage, text: 'Link' },
  { link: routes.BreadcrumbsPage, text: 'Breadcrumbs' },
  { link: routes.DrawerPage, text: 'Drawer' },
  { link: routes.SpeedDialPage, text: 'Speed Dial' },
  { link: routes.BottomNavigationPage, text: 'Bottom Navigation' },
  { link: routes.AvatarPage, text: 'Avatar' },
];

const expandBreakpoint: Breakpoint = 'lg';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const isExpanded = useMediaQuery((theme: Theme) => theme.breakpoints.up(expandBreakpoint));
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          justifyContent: { xs: 'flex-end', [expandBreakpoint]: 'flex-start' },
        }}
      >
        <Box sx={{
          display: { xs: 'none', [expandBreakpoint]: 'flex' },
          alignSelf: 'stretch',
        }}
        >
          {
            linksData.map(({ link, text }) => (
              <NavbarLink key={link} to={link}>{text}</NavbarLink>
            ))
          }
        </Box>

        <IconButton
          sx={{
            display: { xs: 'flex', [expandBreakpoint]: 'none' },
          }}
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
              {
                linksData.map(({ link, text }) => (
                  <MenuItem key={link} onClick={() => setDrawerOpen(false)}>
                    <NavbarMobileLink to={link}>{text}</NavbarMobileLink>
                  </MenuItem>
                ))
              }
            </MenuList>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

/*
  1. Patobulinkite/Sukurkite Savo namų darbą taip, kad visi maršrutai būtų išsaugoti kaip konstantos
  atskirame faile

  2. Panaudokite tėvinį maršrutą visiems vaikianiams varšrutams, kurie turi turėti Navigaciją ir
  užnaudokite išdėstymo (Layout) komponentą

  3. Sukurkite Navigacijos juostą (Navbar), kuriame atvaizduosite visas nuorodas į namų darbo
  puslapius + HomePage

  4. Suformuokite navigacijos juostos nuorodos komponentą ir iškelkite į atskirą failą

  5. Įgalinkite, jog aktyvaus puslapio atitinkama nuoroda įgautų akcentą
    (pabraukimą, paryškinimą ir t.t.).
    Šiam funkcionalumui įgalinti labai padėtų NavLink Komponentas, kuris uždeda komponentui
    papildomą klasę active:
      * https://reactrouter.com/en/main/components/nav-link

    Tam, kad reaguoti į active klasės uždėjimą ir įgalinti stilius, reikėtų aprašyti [4.] punktu
    sukurtam komponentui papildomą klasę '.active', naudojant selektorių '&.active':
      * stilizavimas pagal klases: https://mui.com/material-ui/customization/how-to-customize/#1-one-off-customization
*/
