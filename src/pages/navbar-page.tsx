import React from 'react';
import {
  AppBar, Toolbar, IconButton, Typography,
} from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const NavbarPage = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton size="large" edge="start" color="inherit" aria-label="logo">
        <CatchingPokemonIcon />
      </IconButton>
      <Typography variant="h6" component="div">
        PokemanApp
      </Typography>
    </Toolbar>
  </AppBar>
);

export default NavbarPage;
