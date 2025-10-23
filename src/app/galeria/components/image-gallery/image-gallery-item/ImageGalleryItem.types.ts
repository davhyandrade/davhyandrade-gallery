import { ButtonBaseProps } from '@mui/material';
import { Image } from '../ImageGallery.types';

export interface ImageGalleryItemProps extends ButtonBaseProps {
  image: Image;
}
