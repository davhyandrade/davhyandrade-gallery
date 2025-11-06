export type Image = {
  id: string;
  src: string;
  alt: string;
};

export interface ImageGalleryProps {
  images: Image[][] | null;
}
