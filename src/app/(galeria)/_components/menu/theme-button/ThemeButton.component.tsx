'use client';

import { useState } from 'react';

import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import { IconButton } from '@mui/material';

import ThemePopover from './theme-popover/ThemePopover.component';

function ThemeButton() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <IconButton
        data-testid="theme-button"
        onClick={handleClick}
        sx={{
          border: 1,
          borderColor: 'divider',
          bgcolor: anchorEl ? 'background.paper' : 'transparent',
        }}
      >
        <PaletteOutlinedIcon fontSize="small" />
      </IconButton>

      <ThemePopover anchorEl={anchorEl} onClose={() => setAnchorEl(null)} />
    </>
  );
}

export default ThemeButton;
