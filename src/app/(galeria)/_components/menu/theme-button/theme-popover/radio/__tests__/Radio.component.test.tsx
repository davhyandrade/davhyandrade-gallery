import { render, screen, fireEvent } from '@testing-library/react';

import RadioCustom from '../Radio.component';

jest.mock('../radio-icon/RadioIcon.component', () => ({
  __esModule: true,
  default: ({ color }: { color: string }) => (
    <div data-testid="radio-icon" data-color={color} />
  ),
}));

it('renders the radio correctly', () => {
  render(<RadioCustom color="red" />);

  expect(screen.getByRole('radio')).toBeInTheDocument();
});

it('marks the radio as checked when checked prop is true', () => {
  render(<RadioCustom color="red" checked />);

  expect(screen.getByRole('radio')).toBeChecked();
});

it('passes the color prop to RadioIcon', () => {
  render(<RadioCustom color="blue" />);

  expect(screen.getByTestId('radio-icon')).toHaveAttribute(
    'data-color',
    'blue',
  );
});

it('calls onChange when the radio is clicked', () => {
  const onChange = jest.fn();

  render(<RadioCustom color="red" onChange={onChange} />);
  fireEvent.click(screen.getByRole('radio'));

  expect(onChange).toHaveBeenCalled();
});

it('disables the radio when disabled prop is true', () => {
  render(<RadioCustom color="red" disabled />);

  expect(screen.getByRole('radio')).toBeDisabled();
});

it('forwards extra props to MuiRadio', () => {
  render(<RadioCustom color="red" name="theme-radio" />);

  expect(screen.getByRole('radio')).toHaveAttribute('name', 'theme-radio');
});
