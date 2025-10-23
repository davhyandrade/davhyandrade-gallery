import { Box, Stack } from '@mui/material';

import ImageGallery from './components/image-gallery/ImageGallery.component';
import { initialImages } from './gallery.config';

export default function GalleryPage() {
  return (
    <Stack width="100%" direction="row" justifyContent="center">
      <Box maxWidth={1600}>
        <ImageGallery images={initialImages} />
      </Box>
    </Stack>
  );
}
