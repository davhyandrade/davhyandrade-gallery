import { Category } from '@/shared/types/Image.types';

export const validateCategory = (category: unknown) => {
  const isValidCategory = Object.values(Category).includes(
    category as Category,
  );

  if (!isValidCategory) return null;

  return category as Category;
};
