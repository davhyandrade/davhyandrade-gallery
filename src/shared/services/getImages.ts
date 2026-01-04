import type { GalleryImage } from '@/app/galeria/_components/image-gallery/ImageGallery.types';
import { initialImages } from '@/shared/constants';

export const getImages = (): Promise<GalleryImage[]> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(initialImages);
    }, 3000);
  });
