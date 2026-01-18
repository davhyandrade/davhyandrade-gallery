'use client';

import { useState } from 'react';

import { ButtonBase, Chip, Stack, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import type { ImageGalleryItemProps } from './ImageGalleryItem.types';
import { CATEGORY_LABEL } from '@/shared/constants';

function ImageGalleryItem({
  image,
  hasMultipleImages = false,
  category,
  ...restProps
}: ImageGalleryItemProps) {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const theme = useTheme();

  return (
    <ButtonBase
      data-testid="image-gallery-item"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 3,
        bgcolor: 'background.paper',
        ...(!loaded && { minHeight: { xs: 280, sm: 500 } }),

        '&:hover img': {
          transition: 'all 0.3s ease',
          transform: 'scale(1.01)',
        },
      }}
      {...restProps}
    >
      <LazyLoadImage
        src={image.src}
        alt={image.alt}
        effect="blur"
        width="100%"
        height="100%"
        style={{ objectFit: 'cover', display: 'block' }}
        onLoad={() => setLoaded(true)}
      />

      {loaded && (
        <>
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
              position: 'absolute',
              inset: 0,
              bgcolor: theme => alpha(theme.palette.background.paper, 0.8),
              opacity: 0,
              transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 1,
                '& ~ svg': {
                  color: 'text.primary',
                  transition: 'color 0.3s ease',
                },
              },
            }}
          >
            {!isMobile && (
              <Chip
                variant="filled"
                color={theme.palette.mode === 'light' ? 'primary' : 'default'}
                label={CATEGORY_LABEL[category]}
                sx={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  borderRadius: 3,
                }}
              />
            )}

            <OpenInFullRoundedIcon color="secondary" />

            <Typography variant="body2" color="text.primary" fontWeight={500}>
              Abrir
            </Typography>
          </Stack>

          {hasMultipleImages && (
            <PhotoLibraryIcon
              data-testid="multiple-images-icon"
              fontSize="small"
              sx={{
                color: 'common.white',
                position: 'absolute',
                top: 12,
                right: 12,
                zIndex: 100,
              }}
            />
          )}
        </>
      )}
    </ButtonBase>
  );
}

export default ImageGalleryItem;
