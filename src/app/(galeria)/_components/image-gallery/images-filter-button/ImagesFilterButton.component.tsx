'use client';

import { useState } from 'react';

import { Chip, IconButton, Drawer, Stack, Tooltip } from '@mui/material';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { CATEGORY_LABEL } from '@/shared/constants';
import { CategoryTypes } from '@/shared/types/Image.types';

import { ImagesFilterButtonProps } from './ImagesFilterButton.types';

function ImagesFilterButton({
  setSelectedCategory,
  selectedCategory,
}: ImagesFilterButtonProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleClick = () => {
    if (isDrawerOpen) setSelectedCategory(null);

    setIsDrawerOpen(prev => !prev);
  };

  const handleCategory = (category: CategoryTypes) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      return;
    }

    setSelectedCategory(category);
  };

  return (
    <>
      <Tooltip title="Filtrar Imagens" arrow>
        <IconButton
          color={isDrawerOpen ? 'primary' : 'textAction'}
          onClick={handleClick}
          sx={{
            position: 'fixed',
            bottom: { xs: 16, sm: 32 },
            right: { xs: 16, sm: 32 },
            zIndex: 999,
            border: 1,
            borderColor: isDrawerOpen ? 'primary' : 'divider',
            bgcolor: 'background.default',
          }}
        >
          <FilterListRoundedIcon />
        </IconButton>
      </Tooltip>

      <Drawer
        variant="persistent"
        open={isDrawerOpen}
        anchor="bottom"
        hideBackdrop
        slotProps={{
          paper: {
            sx: {
              mx: 'auto',
              my: { xs: 0, sm: 4 },
              borderRadius: { xs: 0, sm: 12 },
              border: 1,
              borderColor: 'divider',
              bgcolor: 'background.default',
              width: 'fit-content',
            },
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          paddingX={4}
          paddingY={3}
        >
          {(Object.entries(CATEGORY_LABEL) as [CategoryTypes, string][]).map(
            ([key, value]) => {
              const isSelected = selectedCategory === key;

              return (
                <Chip
                  role="checkbox"
                  aria-checked={isSelected}
                  color={isSelected ? 'primary' : 'default'}
                  onClick={() => handleCategory(key)}
                  key={key}
                  label={value}
                  clickable
                />
              );
            },
          )}

          <IconButton onClick={handleClick}>
            <CloseRoundedIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Drawer>
    </>
  );
}

export default ImagesFilterButton;
