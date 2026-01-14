import type { Category, Image } from "@/shared/types/Image.types";

export interface GalleryImage {
  isHighlight?: boolean;
  category: Category;
  images: Image[];
}

export interface ImageGalleryProps {
  images: GalleryImage[] | null;
}
