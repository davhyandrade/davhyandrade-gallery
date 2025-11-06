import { fireEvent, render, screen } from '@testing-library/react';
import ImageGalleryItem from '../ImageGalleryItem.component';

const image = { id: '1', src: 'https://example.com/img1.jpg', alt: 'test' };

it('renders the image with correct alt value', () => {
  render(<ImageGalleryItem image={image} />);

  expect(screen.getByAltText(image.alt)).toBeInTheDocument();
});

it('renders the image with correct src value', () => {
  render(<ImageGalleryItem image={image} />);

  expect(screen.getByRole('img')).toHaveAttribute('src', image.src);
});

it('renders the multiple images icon when hasMultipleImages is true', async () => {
  render(<ImageGalleryItem image={image} hasMultipleImages />);

  fireEvent.load(screen.getByRole('img'));

  expect(screen.getByTestId('multiple-images-icon')).toBeInTheDocument();
});
