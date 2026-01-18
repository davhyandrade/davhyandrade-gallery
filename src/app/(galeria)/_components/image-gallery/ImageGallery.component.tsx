'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { Box, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import FullImageModal from '@/app/(galeria)/_components/full-image-modal/FullImageModal.component';
import ImageGalleryItem from './image-gallery-item/ImageGalleryItem.component';
import ImagesFilterButton from './images-filter-button/ImagesFilterButton.component';

import type { CategoryTypes, Image } from '@/shared/types/Image.types';

import type { ImageGalleryProps } from './ImageGallery.types';
import { validateCategory } from './ImageGallery.utils';
import { CATEGORY_PRIORITY } from './ImageGallery.constants';

function ImageGallery({ images }: ImageGalleryProps) {
  const searchParams = useSearchParams();
  const categoryFromQuery = searchParams.get('category');
  const initialCategory = validateCategory(categoryFromQuery);

  const [showAllImages, setShowAllImages] = useState<boolean | null>(null);
  const [selectedImages, setSelectedImages] = useState<Image[] | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryTypes | null>(initialCategory || null);

  const theme = useTheme();

  const handleShowAllImages = () => {
    setShowAllImages(false);

    setTimeout(() => {
      setShowAllImages(true);
    }, 2000);
  };

  if (!images) return null;

  const visibleImages = images.filter(({ isHighlight, category }) => {
    if (selectedCategory) return category === selectedCategory;

    const highlightFilter = showAllImages ? true : isHighlight;

    return highlightFilter;
  });

  const orderedImages = [...visibleImages].sort((a, b) => {
    if (a.isHighlight !== b.isHighlight) {
      return a.isHighlight ? -1 : 1;
    }

    return CATEGORY_PRIORITY[a.category] - CATEGORY_PRIORITY[b.category];
  });

  return (
    <>
      <Box id="image-gallery" padding={{ xs: 2, sm: 4 }}>
        <ImagesFilterButton
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          hasQueryCategory={!!initialCategory}
        />

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 0: 2, 600: 3 }}
          gutterBreakPoints={{
            0: theme.spacing(2),
            900: theme.spacing(6),
          }}
        >
          <Masonry>
            {orderedImages.map(({ images: img, category }) => (
              <ImageGalleryItem
                key={img[0].id}
                image={img[0]}
                hasMultipleImages={img.length > 1}
                onClick={() => setSelectedImages(img)}
                category={category}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {!showAllImages && !selectedCategory && (
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
