import { createTheme } from '@mui/material/styles';

import { MuiButton } from './components/button';
import typography from './typography';
import palette from './palette';

const theme = createTheme({
  palette,
  colorSchemes: {
    dark: {},
    light: {},
  },
  typography,
  spacing: 4,
  components: {
    MuiButton,
  },
});

export default theme;
