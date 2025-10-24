import { ButtonBaseProps } from '@mui/material';
import { Image } from '@/app/galeria/components/image-gallery/ImageGallery.types';

export interface ImageGalleryItemProps extends ButtonBaseProps {
  image: Image;
}
