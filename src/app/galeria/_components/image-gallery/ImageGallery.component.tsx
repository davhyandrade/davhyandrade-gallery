'use client';

import { useState } from 'react';
import { Box } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

import FullImageModal from '@/app/galeria/_components/full-image-modal/FullImageModal.component';
import ImageGalleryItem from './image-gallery-item/ImageGalleryItem.component';

import type { Image, ImageGalleryProps } from './ImageGallery.types';

function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImages, setSelectedImages] = useState<Image[] | null>(null);

  if (!images) return null;

  return (
    <>
      <Masonry columns={{ xs: 2, sm: 3 }} spacing={{ xs: 2, md: 6 }} sequential>
        {images.map(({ images: img, isHighlight }) => {
          if (!isHighlight) return null;

          return (
            <Box key={img[0].id}>
              <ImageGalleryItem
                image={img[0]}
                hasMultipleImages={img.length > 1}
                onClick={() => setSelectedImages(img)}
              />
            </Box>
          );
        })}
      </Masonry>

      <Box
        id="image-gallery"
        sx={{
          width: '100%',
          padding: { xs: 2, sm: 4 },
          columnCount: { xs: 2, sm: 3 },
          columnGap: { xs: 2, md: 6 },
        }}
      >
        {images.map(({ images: img, isHighlight }) => {
          if (isHighlight) return null;

          return (
            <Box
              key={img[0].id}
              sx={{
                marginBottom: { xs: 2, md: 6 },
                breakInside: 'avoid',
              }}
            >
              <ImageGalleryItem
                image={img[0]}
                hasMultipleImages={img.length > 1}
                onClick={() => setSelectedImages(img)}
              />
            </Box>
          );
        })}
      </Box>

      <FullImageModal
        isOpen={!!selectedImages}
        onClose={() => setSelectedImages(null)}
        images={selectedImages}
      />
    </>
  );
}

export default ImageGallery;
