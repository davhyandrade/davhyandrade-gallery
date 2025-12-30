import type { Components, Theme } from '@mui/material/styles';
import type { ButtonPaletteColor } from './button.types';

const getColorFromOwnerState = (
  ownerColor: string | undefined,
): ButtonPaletteColor => {
  if (ownerColor && ownerColor !== 'inherit') {
    return ownerColor as ButtonPaletteColor;
  }

  return 'primary';
};

export const MuiButton: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: {
      textTransform: 'none',
      fontSize: 16,
      fontWeight: 600,
      borderRadius: 28,
      letterSpacing: 0.3,
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: 32,
      paddingRight: 32,
      boxShadow: 'none',
      transition: 'none',

      '&:hover': {
        boxShadow: 'none',
      },

      '& .MuiButton-icon svg': {
        fontSize: 18,
      },
    },

    text: ({ ownerState, theme }) => {
      const color = getColorFromOwnerState(ownerState.color);

      return {
        fontWeight: 400,
        padding: 0,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 4,

        '&:hover': {
          color: theme.palette[color].dark,
          backgroundColor: 'transparent',
        },
      };
    },

    outlined: ({ ownerState, theme }) => {
      const color = getColorFromOwnerState(ownerState.color);

      return {
        fontWeight: 700,

        '&:hover': {
          color: theme.palette[color].dark,
          borderColor: theme.palette[color].dark,
          backgroundColor: 'transparent',
        },
      };
    },
  },
};
