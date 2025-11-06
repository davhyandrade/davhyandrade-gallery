import type { ButtonBaseProps } from '@mui/material';
import type { Image } from '@/app/galeria/components/image-gallery/ImageGallery.types';

export interface ImageGalleryItemProps extends ButtonBaseProps {
  image: Image;
  hasMultipleImages?: boolean;
}
