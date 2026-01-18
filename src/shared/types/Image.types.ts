export enum Category {
  NATURE = 'nature',
  STREET_PHOTOGRAPHY = 'street-photography',
  VEHICLE = 'vehicle',
  ESSAY = 'essay',
}

export type CategoryTypes =
  | 'nature'
  | 'street-photography'
  | 'vehicle'
  | 'essay';

export type Image = {
  id: string;
  src: string;
  alt: string;
};
