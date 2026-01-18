import type { Dispatch, SetStateAction } from 'react';
import type { CategoryTypes } from '@/shared/types/Image.types';

export interface ImagesFilterButtonProps {
  selectedCategory: CategoryTypes | null;
  setSelectedCategory: Dispatch<SetStateAction<CategoryTypes | null>>;
  hasQueryCategory: boolean;
}
