import { createTheme } from '@mui/material/styles';

import { MuiButton } from './components/button';
import typography from './typography';
import palette from './palette';

const theme = createTheme({
  // palette,
  colorSchemes: {
    dark: {
      palette: {
        background: {
          paper: '#212121',
          default: '#181818',
        },
      },
    },
    light: {
      palette: {
        background: {
          paper: '#eeeeee',
        },
      },
    },
  },
  typography,
  spacing: 4,
  components: {
    MuiButton,
  },
});

export default theme;
