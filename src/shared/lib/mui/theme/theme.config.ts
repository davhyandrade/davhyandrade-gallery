import { createTheme } from '@mui/material/styles';

import { MuiButton } from './components/button.config';
import typography from './typography.config';
import palette from './palette.config';

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
