import { FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(4),
  marginLeft: 0,
  marginRight: 0,
  gap: theme.spacing(2),

  '& .MuiFormControlLabel-label': {
    fontSize: '1rem',
    color: theme.palette.text.primary,
  },

  '&:hover': {
    '.MuiFormControlLabel-label': {
      color: theme.palette.primary.main,
    },

    '.MuiRadio-root div': {
      borderColor: theme.palette.primary.main,
    },
  },

  '&:active': {
    opacity: 0.3,
  },

  '& .MuiRadio-root.Mui-checked div': {
    borderColor: theme.palette.primary.main,
  },

  '&:has(.MuiRadio-root.Mui-checked) .MuiFormControlLabel-label': {
    color: theme.palette.primary.main,
  },
}));
