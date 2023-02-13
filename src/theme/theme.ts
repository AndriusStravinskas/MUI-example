import { createTheme, colors } from '@mui/material';

// sukuria temą, default temos pagrindu.
const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  zIndex: {
    appBar: 1250,
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

export default theme;
