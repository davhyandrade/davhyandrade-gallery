import { Chip, Divider, Drawer, IconButton, Stack } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

import { CATEGORY_LABEL } from '@/shared/constants';
import { CategoryTypes } from '@/shared/types/Image.types';

import type { ImagesFilterPanelProps } from './ImagesFilterPanel.types';

function ImagesFilterPanel({
  open,
  selectedCategory,
  onCategoryClick,
  onCloseClick,
  onShareClick,
  isClipboardSupported,
}: ImagesFilterPanelProps) {
  const actionSize = { xs: 36, sm: 32 };

  if (!open) return null;

  return (
    <Drawer
      data-testid="images-filter-panel"
      variant="persistent"
      open
      data-open={open}
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
            width: { xs: '100%', sm: 'fit-content' },
          },
        },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={4}
        paddingX={{ xs: 2, sm: 4 }}
        paddingY={{ xs: 3, sm: 4 }}
      >
        <Stack
          width="100%"
          sx={{
            overflow: 'hidden',
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 2, sm: 4 }}
            sx={{
              overflowX: 'auto',
            }}
          >
            {(Object.entries(CATEGORY_LABEL) as [CategoryTypes, string][]).map(
              ([key, value]) => {
                const isSelected = selectedCategory === key;

                return (
                  <Chip
                    role="checkbox"
                    aria-checked={isSelected}
                    color={isSelected ? 'primary' : 'default'}
                    onClick={() => onCategoryClick(key)}
                    key={key}
                    label={value}
                    clickable
                  />
                );
              },
            )}
          </Stack>
        </Stack>

        <Divider orientation="vertical" flexItem />

        <Stack direction="row" alignItems="center" spacing={2}>
          {isClipboardSupported && (
            <IconButton
              onClick={() => onShareClick(selectedCategory)}
              sx={{
                width: actionSize,
                height: actionSize,
                fontSize: 18,
              }}
            >
              <ShareRoundedIcon fontSize="inherit" />
            </IconButton>
          )}

          <IconButton
            onClick={onCloseClick}
            sx={{
              width: actionSize,
              height: actionSize,
            }}
          >
            <CloseRoundedIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Drawer>
  );
}

export default ImagesFilterPanel;
