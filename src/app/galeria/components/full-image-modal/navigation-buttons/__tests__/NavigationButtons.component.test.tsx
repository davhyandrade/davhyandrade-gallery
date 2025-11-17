import { render, screen } from '@testing-library/react';
import NavigationButtons from '../NavigationButtons.component';

let isMobile = false;

jest.mock('@mui/material/useMediaQuery', () =>
  jest.fn().mockImplementation(() => isMobile),
);

it('tetsetds', () => {
  isMobile = true;

  const { container } = render(
    <NavigationButtons prevRef={null} nextRef={null} />,
  );

  expect(container).toBeEmptyDOMElement();
});

it('tetsetds', () => {
  isMobile = false;

  render(<NavigationButtons prevRef={null} nextRef={null} />);

  expect(screen.getAllByRole('button')).toHaveLength(2);
});
