import { render, screen } from '@testing-library/react';
import Menu from '../Menu.component';

jest.mock('@mui/material/useMediaQuery', () =>
  jest.fn().mockReturnValue(false),
);

let from: string | null = null;

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn().mockReturnValue(from),
  }),
}));

global.matchMedia = jest.fn().mockReturnValue({
  matches: true,
});

describe('without "from" parameter', () => {
  beforeEach(() => {
    from = null;
  });

  it('renders button text correctly', () => {
    render(<Menu />);

    expect(
      screen.getByRole('button', { name: 'Ir para a página principal' }),
    ).toBeInTheDocument();
  });

  it('renders button icon correctly', () => {
    render(<Menu />);

    expect(screen.getByTestId('east-icon')).toBeInTheDocument();
  });
});

describe('with "from" parameter', () => {
  beforeEach(() => {
    from = 'de currículo';
  });

  it('renders button text correctly', () => {
    render(<Menu />);

    expect(
      screen.getByRole('button', { name: 'Voltar para a página de currículo' }),
    ).toBeInTheDocument();
  });

  it('renders button icon correctly', () => {
    render(<Menu />);

    expect(screen.getByTestId('west-icon')).toBeInTheDocument();
  });
});
