import type { CategoryTypes } from '@/shared/types/Image.types';
import type { Dispatch, SetStateAction } from 'react';

export interface ImagesFilterButtonProps {
  selectedCategory: CategoryTypes;
  setSelectedCategory: Dispatch<SetStateAction<CategoryTypes | null>>;
}
