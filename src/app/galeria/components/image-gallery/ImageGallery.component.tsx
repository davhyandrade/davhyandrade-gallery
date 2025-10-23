'use client';

import { useState } from 'react';
import { Box } from '@mui/material';

import FullImageModal from '../full-image-modal/FullImageModal.component';
import ImageGalleryItem from './image-gallery-item/ImageGalleryItem.component';

import { ImageGalleryProps } from './ImageGallery.types';

function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Box
        sx={{
          width: '100%',
          padding: 4,
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
