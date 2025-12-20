import type { Components, Theme } from '@mui/material/styles';

export const MuiButton: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: {
      textTransform: 'none',
      fontSize: 14,
      fontWeight: 600,
      borderRadius: 12,
      letterSpacing: 0.3,
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 32,
      paddingRight: 32,
      boxShadow: 'none',

      '&:hover': {
        boxShadow: 'none',
      },

      '& .MuiButton-icon svg': {
        fontSize: 18,
      },

      variants: [
        {
          props: { variant: 'text' },
          style: {
            fontSize: 16,
            fontWeight: 400,
            padding: 0,
            paddingLeft: 8,
            paddingRight: 8,
            borderRadius: 4,
            verticalAlign: 'baseline',
          },
        },
      ],
    },
  },
};
