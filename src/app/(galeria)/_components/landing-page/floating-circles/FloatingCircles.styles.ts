import { keyframes } from '@mui/system';
import type { PaletteColor } from '@mui/material/styles';

export const pulseAnimation = (color: PaletteColor) => keyframes`
    0% {
      opacity: 0.2;
      transform: scale(1);
      background-color: ${color.main};
    }
    33% {
      opacity: 0.5;
      transform: scale(1.05);
      background-color: ${color.light};
    }
    66% {
      opacity: 0.5;
      transform: scale(1.05);
      background-color: ${color.dark};
    }
    100% {
      opacity: 0.2;
      transform: scale(1);
      background-color: ${color.main};
    }
  `;
