import type { ButtonBaseProps } from '@mui/material';
import type { Category, Image } from '@/shared/types/Image.types';

export interface ImageGalleryItemProps extends ButtonBaseProps {
  image: Image;
  hasMultipleImages?: boolean;
  category: Category;
}
