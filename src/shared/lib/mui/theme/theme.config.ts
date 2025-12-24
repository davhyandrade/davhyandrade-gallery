import { createTheme } from '@mui/material/styles';

import { MuiButton } from './components/button/button.config';
import typography from './typography.config';
import { darkPalette, lightPalette } from './palette/palette.config';

const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: darkPalette,
    },
    light: {
      palette: lightPalette,
    },
  },
  typography,
  spacing: 4,
  components: {
    MuiButton,
  },
});

export default theme;
