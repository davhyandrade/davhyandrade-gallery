import type { RadioProps } from '@mui/material';

export type RadioComponentProps = Omit<RadioProps, 'color'> & {
  color: string;
};
