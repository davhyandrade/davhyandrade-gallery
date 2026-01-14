import { Box, Stack } from '@mui/material';
import { getImages } from '@/shared/services/getImages';

import ImageGallery from './_components/image-gallery/ImageGallery.component';
import LandingPage from './_components/landing-page/LandingPage.component';

async function GalleryPage() {
  const images = await getImages();

  return (
    <Stack width="100%" direction="column" alignItems="center">
      <LandingPage />

      <Box
        maxWidth="xl"
        width="100%"
        mt={{ xs: 0, sm: 2 }}
        mb={{ xs: 0, sm: 8 }}
      >
        <ImageGallery images={images} />
      </Box>
    </Stack>
  );
}

export default GalleryPage;
