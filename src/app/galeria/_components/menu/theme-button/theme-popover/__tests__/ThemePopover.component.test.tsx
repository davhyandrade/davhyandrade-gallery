import { render, screen, fireEvent } from '@testing-library/react';
import ThemePopover from '../ThemePopover.component';

const setMode = jest.fn();

jest.mock('@mui/material/styles', () => ({
  ...jest.requireActual('@mui/material/styles'),
  useColorScheme: jest.fn().mockImplementation(() => ({
    mode: 'any',
    setMode,
  })),
}));

const defaultProps = {
  anchorEl: document.createElement('button'),
  onClose: jest.fn(),
};

global.matchMedia = jest.fn().mockReturnValue({
  matches: true,
});

it('renders the popover content when anchorEl is provided', () => {
  render(<ThemePopover {...defaultProps} />);

  expect(screen.getByTestId('theme-popover')).toBeInTheDocument();
});

it('does not render the popover content when anchorEl is null', () => {
  render(<ThemePopover anchorEl={null} onClose={jest.fn()} />);

  expect(screen.queryByTestId('theme-popover')).not.toBeInTheDocument();
});

it('renders the title correctly', () => {
  render(<ThemePopover {...defaultProps} />);

  expect(screen.getByText('Tema')).toBeInTheDocument();
});

it('calls setMode with the correct value when dark button is clicked', () => {
  render(<ThemePopover {...defaultProps} />);

  fireEvent.click(screen.getByLabelText('Escuro'));

  expect(setMode).toHaveBeenCalledWith('dark');
});

it('calls setMode with the correct value when light button is clicked', () => {
  render(<ThemePopover {...defaultProps} />);

  fireEvent.click(screen.getByLabelText('Claro'));

  expect(setMode).toHaveBeenCalledWith('light');
});

it('calls setMode with the correct value when system button is clicked', () => {
  render(<ThemePopover {...defaultProps} />);

  fireEvent.click(screen.getByLabelText('Sistema'));

  expect(setMode).toHaveBeenCalledWith('system');
});

it('calls onClose when clicking on the backdrop', () => {
  render(<ThemePopover {...defaultProps} />);

  const backdrop = document.querySelector('.MuiBackdrop-root') as HTMLElement;

  fireEvent.click(backdrop);

  expect(defaultProps.onClose).toHaveBeenCalled();
});
