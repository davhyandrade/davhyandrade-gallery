import type { Image } from '@/app/galeria/components/image-gallery/ImageGallery.types';

export interface FullImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Image[] | null;
}
