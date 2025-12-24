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
    primary: '#1f2937',
    secondary: '#6b7280',
    disabled: '#d1d1d1ff',
  },
  textAction: {
    main: '#1f2937',
    contrastText: '#0a0909ff',
  },
  primary: {
    main: '#2494d6',
    dark: '#0068a6',
    light: '#d2eeffff',
    contrastText: '#ffffff',
  },
  secondary: {
    ...baseSecondary,
    contrastText: '#ffffff',
  },
};

export const darkPalette: PaletteOptions = {
  background: {
    default: '#1A1A1A',
    paper: '#242424',
  },
  textAction: {
    main: '#e5e7eb',
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
};
