import type { ButtonProps } from '@mui/material';
import type { Palette } from '@mui/material/styles';

export type ButtonPaletteColor = Exclude<ButtonProps['color'], 'inherit'> &
  keyof Palette;
