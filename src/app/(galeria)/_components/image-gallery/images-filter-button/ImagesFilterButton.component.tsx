'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { IconButton, Tooltip } from '@mui/material';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

import { CategoryTypes } from '@/shared/types/Image.types';

import ImagesFilterPanel from './images-filter-panel/ImagesFilterPanel.component';
import type { ImagesFilterButtonProps } from './ImagesFilterButton.types';

function ImagesFilterButton({
  setSelectedCategory,
  selectedCategory,
  hasQueryCategory,
}: ImagesFilterButtonProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(
    !!selectedCategory || false,
  );
  const { replace } = useRouter();

  const handleClick = () => {
    if (isDrawerOpen) {
      if (hasQueryCategory) replace('/');

      setSelectedCategory(null);
    }

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
          data-testid="images-filter-button"
          color={isDrawerOpen ? 'primary' : 'default'}
          onClick={handleClick}
          sx={{
            position: 'fixed',
            bottom: { xs: 12, sm: 32 },
            right: { xs: 12, sm: 32 },
            zIndex: 999,
            border: 1,
            borderColor: isDrawerOpen ? 'primary' : 'divider',
            bgcolor: 'background.default',
          }}
        >
          <FilterListRoundedIcon />
        </IconButton>
      </Tooltip>

      <ImagesFilterPanel
        open={isDrawerOpen}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategory}
        onCloseClick={handleClick}
      />
    </>
  );
}

export default ImagesFilterButton;
