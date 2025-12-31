import { createTheme } from '@mui/material/styles';

import { MuiButton } from './components/button/button.config';
import { darkPalette, lightPalette } from './palette/palette.config';
import typography from './typography.config';
import breakpoints from './breakpoints.config';

const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: darkPalette,
    },
    light: {
      palette: lightPalette,
    },
  },
  breakpoints,
  typography,
  spacing: 4,
  components: {
    MuiButton,
  },
});

export default theme;
