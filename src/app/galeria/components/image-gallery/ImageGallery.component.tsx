'use client';

import { useState } from 'react';
import { Box } from '@mui/material';

import FullImageModal from '@/app/galeria/components/full-image-modal/FullImageModal.component';
import ImageGalleryItem from './image-gallery-item/ImageGalleryItem.component';

import type { ImageGalleryProps } from './ImageGallery.types';

function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images) return null;

  return (
    <>
      <Box
        sx={{
          width: '100%',
          padding: { xs: 2, sm: 4 },
          columnCount: { xs: 2, sm: 3, lg: 4 },
          columnGap: 1,
        }}
      >
        {images.map(img => (
          <Box
            key={img.id}
            sx={{
              marginBottom: 1,
              breakInside: 'avoid',
            }}
          >
            <ImageGalleryItem
              image={img}
              onClick={() => setSelectedImage(img.src)}
            />
          </Box>
        ))}
      </Box>

      <FullImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        src={selectedImage}
      />
    </>
  );
}

export default ImageGallery;
