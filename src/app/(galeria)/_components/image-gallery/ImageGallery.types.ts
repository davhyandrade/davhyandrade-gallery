export type Image = {
  id: string;
  src: string;
  alt: string;
};

export interface GalleryImage {
  isHighlight?: boolean;
  images: Image[];
}

export interface ImageGalleryProps {
  images: GalleryImage[] | null;
}
