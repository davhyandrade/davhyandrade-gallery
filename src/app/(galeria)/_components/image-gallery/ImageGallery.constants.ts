import { Category } from "@/shared/types/Image.types";

export const CATEGORY_PRIORITY: Record<Category, number> = {
  [Category.NATURE]: 0,
  [Category.VEHICLE]: 1,
  [Category.STREET_PHOTOGRAPHY]: 2,
  [Category.ESSAY]: 3,
};