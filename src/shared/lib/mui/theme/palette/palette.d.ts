import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    textAction: Palette['primary'];
  }

  interface PaletteOptions {
    textAction?: PaletteOptions['primary'];
  }

  interface TypeText {
    title: string;
  }
}
