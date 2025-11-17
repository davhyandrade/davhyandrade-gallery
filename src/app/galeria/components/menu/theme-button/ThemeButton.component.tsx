'use client';

import { useState } from 'react';

import { useColorScheme } from '@mui/material/styles';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import {
  IconButton,
  FormControl,
  FormControlLabel,
  FormLabel,
  Popover,
  RadioGroup,
  Radio,
} from '@mui/material';

function ThemeButton() {
  const { mode, setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  if (!mode) return null;

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          border: 2,
          borderColor: 'background.paper',
          bgcolor: anchorEl ? 'background.paper' : 'transparent',
        }}
      >
        <PaletteOutlinedIcon fontSize="small" />
      </IconButton>

      <Popover
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
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
              borderRadius: 2,
            },
          },
        }}
      >
        <FormControl sx={{ padding: 4 }}>
          <FormLabel id="demo-theme-toggle">Tema</FormLabel>

          <RadioGroup
            aria-labelledby="demo-theme-toggle"
            name="theme-toggle"
            row
            value={mode}
            onChange={event =>
              setMode(event.target.value as 'system' | 'light' | 'dark')
            }
          >
            <FormControlLabel
              value="system"
              control={<Radio />}
              label="Sistema"
            />
            <FormControlLabel value="light" control={<Radio />} label="Claro" />
            <FormControlLabel value="dark" control={<Radio />} label="Escuro" />
          </RadioGroup>
        </FormControl>
      </Popover>
    </>
  );
}

export default ThemeButton;
