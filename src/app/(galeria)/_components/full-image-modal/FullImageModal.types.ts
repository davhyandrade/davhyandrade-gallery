import type { Image } from '@/shared/types/Image.types';

export interface FullImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Image[] | null;
}
