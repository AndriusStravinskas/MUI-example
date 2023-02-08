import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import routes from 'navigation/routes';
import NavbarLink from './navbar-link';

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
];

const Navbar = () => (
  <AppBar position="sticky">
    <Toolbar>
      {
        linksData.map(({ link, text }) => (
          <NavbarLink key={link} to={link}>{text}</NavbarLink>
        ))
      }

    </Toolbar>
  </AppBar>
);

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
