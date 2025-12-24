'use client';

import { useState } from 'react';

import { ButtonBase, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import type { ImageGalleryItemProps } from './ImageGalleryItem.types';

function ImageGalleryItem({
  image,
  hasMultipleImages = false,
  ...restProps
}: ImageGalleryItemProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <ButtonBase
      data-testid="image-gallery-item"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 2,
        bgcolor: 'background.paper',
        ...(!loaded && { minHeight: { xs: 280, sm: 500 } }),
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
