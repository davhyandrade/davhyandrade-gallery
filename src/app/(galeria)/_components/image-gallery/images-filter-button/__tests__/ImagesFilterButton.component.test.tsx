import { fireEvent, render, screen } from '@testing-library/react';

import ImagesFilterButton from '../ImagesFilterButton.component';

const mockedReplace = jest.fn();
const setSelectedCategory = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: mockedReplace,
  }),
}));

const defaultProps = {
  selectedCategory: null,
  setSelectedCategory,
  hasQueryCategory: false,
};

beforeEach(() => {
  jest.clearAllMocks();
});

it('opens drawer when button is clicked', () => {
  render(<ImagesFilterButton {...defaultProps} />);

  fireEvent.click(screen.getByTestId('images-filter-button'));

  expect(screen.getByTestId('images-filter-panel')).toBeInTheDocument();
});

it('closes drawer when button is clicked again', () => {
  render(<ImagesFilterButton {...defaultProps} />);

  const button = screen.getByTestId('images-filter-button');

  fireEvent.click(button);
  fireEvent.click(button);

  expect(screen.queryByTestId('images-filter-panel')).not.toBeInTheDocument();
});

it('clears selected category and replaces route when closing with query category', () => {
  render(
    <ImagesFilterButton
      {...defaultProps}
      hasQueryCategory
      selectedCategory="nature"
    />,
  );

  fireEvent.click(screen.getByTestId('images-filter-button'));

  expect(setSelectedCategory).toHaveBeenCalledWith(null);
  expect(mockedReplace).toHaveBeenCalledWith('/');
});

it('sets category when clicking on category', () => {
  render(<ImagesFilterButton {...defaultProps} />);

  fireEvent.click(screen.getByTestId('images-filter-button'));
  fireEvent.click(screen.getByText('Natureza'));

  expect(setSelectedCategory).toHaveBeenCalledWith('nature');
});

it('clears category when clicking the same category again', () => {
  render(<ImagesFilterButton {...defaultProps} selectedCategory="nature" />);

  fireEvent.click(screen.getByText('Natureza'));

  expect(setSelectedCategory).toHaveBeenCalledWith(null);
});
