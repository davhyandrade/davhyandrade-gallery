import { render, screen, fireEvent } from '@testing-library/react';
import ImageGallery from '../ImageGallery.component';

jest.mock('@mui/material/useMediaQuery', () =>
  jest.fn().mockReturnValue(false),
);

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock('react-responsive-masonry', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  ResponsiveMasonry: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock('swiper/modules', () => ({
  Pagination: {},
  Mousewheel: {},
  Keyboard: {},
  Zoom: {},
  Navigation: {},
}));

const mockImages = [
  {
    isHighlight: true,
    images: [{ id: '1', src: 'https://example.com/img1.jpg', alt: 'test' }],
  },
  {
    isHighlight: true,
    images: [{ id: '2', src: 'https://example.com/img2.jpg', alt: 'test' }],
  },
  {
    isHighlight: true,
    images: [{ id: '3', src: 'https://example.com/img3.jpg', alt: 'test' }],
  },
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
    mockImages[0].images[0].src,
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
