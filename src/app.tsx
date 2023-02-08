import React from 'react';
// import TypographyPage from 'pages/typography-page';
// import ButtonPage from 'pages/button-page';
// import TextFieldPage from 'pages/textfield-page';
// import SelectPage from 'pages/select-page';
// import RadioButtonPage from 'pages/radio-button-page';
// import CheckboxPage from 'pages/Checkbox-page';
import { RouterProvider } from 'react-router-dom';
import router from 'navigation/router';

const App = () => (

  <RouterProvider router={router} />

);

export default App;

/*
  1. Patobulinkite/Sukurkite Savo namų darbą taip, kad visi maršrutai būtų išsaugoti kaip konstantos
  atskirame faile

  2. Panaudokite tėvinį maršrutą visiems vaikianiams varšrutams, kurie turi turėti Navigaciją ir
  užnaudokite išdėstymo (Layout) komponentą

  3. Sukurkite Navigacijos juostą (Navbar), kuriame atvaizduosite visas nuorodas į namų darbo
  puslapius + HomePage

  4. Suformuokite navigacijos juostos nuorodos komponentą ir iškelkite į atskirą failą

  5.
      * https://reactrouter.com/en/main/components/nav-link

    Tam, kad reaguoti į active klasės uždėjimą ir įgalinti stilius, reikėtų aprašyti [4.] punktu
    sukurtam komponentui papildomą klasę '.active', naudojant selektorių '&.active':
      * stilizavimas pagal klases: https://mui.com/material-ui/customization/how-to-customize/#1-one-off-customization
*/

// { /* <Box sx={{
//    padding: 4,
//  }}
//  > */ }
// { /* <TypographyPage /> */ }
// { /* <ButtonPage /> */ }
// { /* <TextFieldPage /> */ }
// { /* <SelectPage /> */ }
// { /* <RadioButtonPage /> */ }
// { /* <CheckboxPage /> */ }
// { /* // </Box> */ }
