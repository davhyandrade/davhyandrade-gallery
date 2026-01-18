import { fireEvent, render, screen } from '@testing-library/react';
import type { CategoryTypes } from '@/shared/types/Image.types';
import ImageGalleryItem from '../ImageGalleryItem.component';

jest.mock('@mui/material/useMediaQuery', () =>
  jest.fn().mockReturnValue(false),
);

const image = { id: '1', src: 'https://example.com/img1.jpg', alt: 'test' };

const defaultProps = {
  image,
  category: 'nature' as CategoryTypes,
};

it('renders the image with correct alt value', () => {
  render(<ImageGalleryItem {...defaultProps} />);

  expect(screen.getByAltText(image.alt)).toBeInTheDocument();
});

it('renders the image with correct src value', () => {
  render(<ImageGalleryItem {...defaultProps} />);

  expect(screen.getByRole('img')).toHaveAttribute('src', image.src);
});

it('renders the multiple images icon when hasMultipleImages is true', async () => {
  render(<ImageGalleryItem {...defaultProps} hasMultipleImages />);

  fireEvent.load(screen.getByRole('img'));

  expect(screen.getByTestId('multiple-images-icon')).toBeInTheDocument();
});
