import { Box, Stack } from '@mui/material';
import { getImages } from '@/shared/services/getImages';

import ImageGallery from './_components/image-gallery/ImageGallery.component';

async function GalleryPage() {
  const images = await getImages();

  return (
    <Stack width="100%" direction="row" justifyContent="center">
      <Box maxWidth={1750} width="100%" >
        <ImageGallery images={images} />
      </Box>
    </Stack>
  );
}

export default GalleryPage;
