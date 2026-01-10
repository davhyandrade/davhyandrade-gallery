'use client';

import { useState } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import FullImageModal from '@/app/galeria/_components/full-image-modal/FullImageModal.component';
import ImageGalleryItem from './image-gallery-item/ImageGalleryItem.component';

import type { Image, ImageGalleryProps } from './ImageGallery.types';

function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImages, setSelectedImages] = useState<Image[] | null>(null);
  const theme = useTheme();

  if (!images) return null;

  return (
    <>
      <Box id="image-gallery" padding={{ xs: 2, sm: 4 }}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 0: 2, 600: 3 }}
          gutterBreakPoints={{
            0: theme.spacing(2),
            900: theme.spacing(6),
          }}
        >
          <Masonry>
            {images.map(img => (
              <ImageGalleryItem
                key={img[0].id}
                image={img[0]}
                hasMultipleImages={img.length > 1}
                onClick={() => setSelectedImages(img)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
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
