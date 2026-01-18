import { fireEvent, render, screen } from '@testing-library/react';

import ImagesFilterPanel from '../ImagesFilterPanel.component';
import { CATEGORY_LABEL } from '@/shared/constants';

const onCategoryClick = jest.fn();
const onCloseClick = jest.fn();

const defaultProps = {
  open: true,
  selectedCategory: null,
  onCategoryClick,
  onCloseClick,
};

beforeEach(() => {
  jest.clearAllMocks();
});

it('does not render when open is false', () => {
  render(<ImagesFilterPanel {...defaultProps} open={false} />);

  expect(screen.queryByTestId('images-filter-panel')).not.toBeInTheDocument();
});

it('renders when open is true', () => {
  render(<ImagesFilterPanel {...defaultProps} />);

  expect(screen.getByTestId('images-filter-panel')).toBeInTheDocument();
});

it.each(Object.values(CATEGORY_LABEL))('renders the %p category chips', label => {
  render(<ImagesFilterPanel {...defaultProps} />);

  expect(screen.getByText(label)).toBeInTheDocument();
});

it('marks the selected category as checked', () => {
  render(<ImagesFilterPanel {...defaultProps} selectedCategory="nature" />);

  const selectedChip = screen.getByRole('checkbox', {
    name: CATEGORY_LABEL.nature,
  });

  expect(selectedChip).toHaveAttribute('aria-checked', 'true');
});

it('calls onCategoryClick with category key when clicking a chip', () => {
  render(<ImagesFilterPanel {...defaultProps} />);

  fireEvent.click(screen.getByText(CATEGORY_LABEL.nature));

  expect(onCategoryClick).toHaveBeenCalledWith('nature');
});

it('calls onCloseClick when clicking the close button', () => {
  render(<ImagesFilterPanel {...defaultProps} />);

  const closeButton = screen.getByRole('button');

  fireEvent.click(closeButton);

  expect(onCloseClick).toHaveBeenCalled();
});
