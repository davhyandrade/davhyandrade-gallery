import type { CategoryTypes } from '@/shared/types/Image.types';

export interface ImagesFilterPanelProps {
  open: boolean;
  selectedCategory: CategoryTypes | null;
  onCategoryClick: (key: CategoryTypes) => void;
  onCloseClick: () => void;
  onShareClick: (category: CategoryTypes | null) => void;
  isClipboardSupported: boolean;
}
