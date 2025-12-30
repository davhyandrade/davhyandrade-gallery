import type {
  PaletteOptions,
  SimplePaletteColorOptions,
} from '@mui/material/styles';

import { orange } from '@mui/material/colors';

const baseSecondary: SimplePaletteColorOptions = {
  main: orange[800],
  dark: orange[900],
  light: orange[300],
};

export const lightPalette: PaletteOptions = {
  background: {
    paper: '#f5f5f5ff',
    default: '#ffffff',
  },
  text: {
    title: '#1f2937',
    primary: '#6b7280',
    secondary: '#9ca3af',
    disabled: '#d1d1d1ff',
  },
  textAction: {
    main: '#1f2937',
    dark: '#2494d6',
    contrastText: '#ffffff',
  },
  primary: {
    main: '#2494d6',
    dark: '#0068a6',
    light: '#cae5ee80',
    contrastText: '#ffffff',
  },
  secondary: {
    ...baseSecondary,
    contrastText: '#ffffff',
  },
  divider: '#e5e7eb',
};

export const darkPalette: PaletteOptions = {
  background: {
    default: '#1A1A1A',
    paper: '#242424',
  },
  textAction: {
    main: '#e5e7eb',
    dark: '#90caf9',
    contrastText: '#242424',
  },
  text: {
    primary: '#e5e7eb',
    secondary: '#a5a5a5ff',
    disabled: '#686868ff',
  },
  secondary: {
    ...baseSecondary,
    contrastText: '#242424',
  },
  primary: {
    main: '#90caf9',
    light: '#e3f2fd1c',
    dark: '#42a5f5',
    contrastText: '#242424',
  },
};
