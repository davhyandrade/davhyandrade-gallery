import { FormControl, FormLabel, Popover, RadioGroup } from '@mui/material';
import { alpha, useColorScheme, useTheme } from '@mui/material/styles';

import Radio from './radio/Radio.component';
import { StyledFormControlLabel } from './ThemePopover.styles';
import type { ThemePopoverProps } from './ThemePopover.types';

function ThemePopover({ anchorEl, onClose }: ThemePopoverProps) {
  const { mode, setMode } = useColorScheme();
  const theme = useTheme();

  const isSystemDark = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;

  const color = isSystemDark
    ? theme.palette.common.black
    : theme.palette.common.white;

  return (
    <Popover
      data-testid="theme-popover"
      open={!!anchorEl}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      slotProps={{
        paper: {
          sx: {
            mt: 2,
            boxShadow: 'none',
            borderRadius: 3,
          },
        },
      }}
    >
      <FormControl sx={{ padding: 4 }}>
        <FormLabel sx={{ mb: 2 }}>Tema</FormLabel>

        <RadioGroup
          value={mode}
          onChange={event =>
            setMode(event.target.value as 'system' | 'light' | 'dark')
          }
          sx={{
            gap: 2,
          }}
        >
          <StyledFormControlLabel
            value="system"
            control={<Radio color={alpha(color, 0.3)} />}
            label="Sistema"
          />

          <StyledFormControlLabel
            value="light"
            control={<Radio color="common.white" />}
            label="Claro"
          />

          <StyledFormControlLabel
            value="dark"
            control={<Radio color="common.black" />}
            label="Escuro"
          />
        </RadioGroup>
      </FormControl>
    </Popover>
  );
}

export default ThemePopover;
