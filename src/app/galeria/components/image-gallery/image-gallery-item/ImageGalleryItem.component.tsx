'use client';

import { useState } from 'react';

import { ButtonBase, Stack, Typography } from '@mui/material';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import type { ImageGalleryItemProps } from './ImageGalleryItem.types';

function ImageGalleryItem({ image, ...restProps }: ImageGalleryItemProps) {
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
        bgcolor: 'gray.light',
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
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(255, 255, 255, 0.5)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            '&:hover': { opacity: 1 },
          }}
        >
          <OpenInFullRoundedIcon color="info" />

          <Typography variant="body2" color="info.main" fontWeight={500}>
            Abrir
          </Typography>
        </Stack>
      )}
    </ButtonBase>
  );
}

export default ImageGalleryItem;
