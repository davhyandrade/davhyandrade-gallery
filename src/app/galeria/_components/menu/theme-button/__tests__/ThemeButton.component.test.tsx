import { fireEvent, render, screen } from '@testing-library/react';
import ThemeButton from '../ThemeButton.component';

global.matchMedia = jest.fn().mockReturnValue({
  macthes: true,
});

it('renders the popover when theme button is clicked', () => {
  render(<ThemeButton />);

  fireEvent.click(screen.getByTestId('theme-button'));

  expect(screen.getByTestId('theme-popover')).toBeInTheDocument();
});

it('does not render the theme popover before the button is clicked', () => {
  render(<ThemeButton />);

  expect(screen.queryByTestId('theme-popover')).not.toBeInTheDocument();
});
