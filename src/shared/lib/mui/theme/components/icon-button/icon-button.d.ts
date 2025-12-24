import '@mui/material/IconButton';

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    textAction: true;
  }
}
