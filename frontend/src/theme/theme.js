import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6d4c41'
    },
    secondary: {
      main: '#c9a66b'
    },
    background: {
      default: '#f7f5f2'
    }
  },
  shape: {
    borderRadius: 12
  }
});
