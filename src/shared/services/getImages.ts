import type { Image } from '@/app/galeria/components/image-gallery/ImageGallery.types';
import { initialImages } from '@/shared/constants';

export const getImages = (): Promise<Image[][]> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(initialImages);
    }, 3000);
  });
