import { render, screen, fireEvent } from '@testing-library/react';
import ImageGallery from '../ImageGallery.component';

const mockImages = [
  { id: '1', src: 'https://example.com/img1.jpg', alt: 'test' },
  { id: '2', src: 'https://example.com/img2.jpg', alt: 'test' },
  { id: '3', src: 'https://example.com/img3.jpg', alt: 'test' },
];

it('renders all images', () => {
  render(<ImageGallery images={mockImages} />);

  const items = screen.getAllByTestId('image-gallery-item');
  expect(items).toHaveLength(mockImages.length);
});

it('displays the full image in the modal when an image is clicked', () => {
  render(<ImageGallery images={mockImages} />);

  const firstImage = screen.getAllByTestId('image-gallery-item')[0];
  fireEvent.click(firstImage);

  expect(screen.getByTestId('full-image')).toHaveAttribute(
    'src',
    mockImages[0].src,
  );
});

it('closes modal when close button is clicked', () => {
  render(<ImageGallery images={mockImages} />);

  const firstImage = screen.getAllByTestId('image-gallery-item')[0];
  fireEvent.click(firstImage);

  fireEvent.click(screen.getByTestId('close-button'));

  expect(screen.queryByTestId('full-image-modal')).not.toBeInTheDocument();
});

it('does not render modal initially', () => {
  render(<ImageGallery images={mockImages} />);

  expect(screen.queryByTestId('full-image-modal')).not.toBeInTheDocument();
});
