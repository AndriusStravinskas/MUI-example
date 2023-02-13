import { PaletteColor, PaletteColorOptions } from '@mui/material';
import React from 'react';

declare module '@mui/material/styles' {

  interface Theme {
    status: {
      danger: string
    }
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color']
    }
  }

  interface Pallete {
    neutral: PaletteColor
  }

  interface PaletteOptions {
    neutral: PaletteColorOptions
  }

  interface SimplePaletteColorOption {
    darker: string
  }

  interface PaletteColor {
    darker: string
  }
}
