'use client';

import { useState } from 'react';
import { Box, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import FullImageModal from '@/app/(galeria)/_components/full-image-modal/FullImageModal.component';
import ImageGalleryItem from './image-gallery-item/ImageGalleryItem.component';

import type { Image, ImageGalleryProps } from './ImageGallery.types';

function ImageGallery({ images }: ImageGalleryProps) {
  const [showAllImages, setShowAllImages] = useState<boolean | null>(null);
  const [selectedImages, setSelectedImages] = useState<Image[] | null>(null);
  const theme = useTheme();

  const handleShowAllImages = () => {
    setShowAllImages(false);

    setTimeout(() => {
      setShowAllImages(true);
    }, 2000);
  };

  if (!images) return null;

  const visibleImages = images.filter(({ isHighlight }) =>
    showAllImages ? true : isHighlight,
  );

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
            {visibleImages.map(({ images: img }) => (
              <ImageGalleryItem
                key={img[0].id}
                image={img[0]}
                hasMultipleImages={img.length > 1}
                onClick={() => setSelectedImages(img)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {!showAllImages && (
          <Stack
            direction="row"
            width="100%"
            alignItems="center"
            justifyContent="center"
            paddingTop={6}
            paddingBottom={{ xs: 4, sm: 0 }}
          >
            <Button
              variant="contained"
              color="textAction"
              loading={showAllImages === false}
              onClick={handleShowAllImages}
              endIcon={<ExpandMoreIcon />}
            >
              Ver mais fotos
            </Button>
          </Stack>
        )}
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
