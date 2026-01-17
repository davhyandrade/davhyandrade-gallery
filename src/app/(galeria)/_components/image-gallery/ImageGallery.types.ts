import type { CategoryTypes, Image } from '@/shared/types/Image.types';

export interface GalleryImage {
  isHighlight?: boolean;
  category: CategoryTypes;
  images: Image[];
}

export interface ImageGalleryProps {
  images: GalleryImage[] | null;
}
