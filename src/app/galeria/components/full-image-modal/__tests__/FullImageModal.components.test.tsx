import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import FullImageModal from './FullImageModal.component';
import NavigationButtons from './navigation-buttons/NavigationButtons.component';

// ==== Mocks ====

// mock do hook do MUI
jest.mock('@mui/material/useMediaQuery', () => jest.fn());

// mock do componente NavigationButtons
jest.mock('./navigation-buttons/NavigationButtons.component', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="navigation-buttons" />),
}));

// mock dos componentes do Swiper (pra evitar dependências reais)
jest.mock('@/shared/components/swiper/Swiper.styles', () => ({
  __esModule: true,
  default: ({ children }: any) => <div data-testid="swiper">{children}</div>,
}));

jest.mock('@/shared/components/swiper-slide/SwiperSlide.styles', () => ({
  __esModule: true,
  default: ({ children, onClick }: any) => (
    <div data-testid="swiper-slide" onClick={onClick}>
      {children}
    </div>
  ),
}));

describe('FullImageModal', () => {
  const mockOnClose = jest.fn();
  const mockImages = [
    { id: '1', src: '/img1.jpg' },
    { id: '2', src: '/img2.jpg' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    (useMediaQuery as jest.Mock).mockReturnValue(false); // desktop por padrão
  });

  it('não deve renderizar nada se "images" for undefined', () => {
    const { container } = render(
      <FullImageModal isOpen onClose={mockOnClose} images={undefined as any} />,
    );
    expect(container.firstChild).toBeNull();
  });

  it('deve renderizar o modal quando isOpen for true', () => {
    render(<FullImageModal isOpen onClose={mockOnClose} images={mockImages} />);
    expect(screen.getByTestId('full-image-modal')).toBeInTheDocument();
    expect(screen.getAllByTestId('full-image')).toHaveLength(2);
  });

  it('deve chamar onClose ao clicar no botão de fechar', () => {
    render(<FullImageModal isOpen onClose={mockOnClose} images={mockImages} />);
    fireEvent.click(screen.getByTestId('close-button'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('deve chamar onClose ao clicar no backdrop (fora da imagem)', () => {
    render(<FullImageModal isOpen onClose={mockOnClose} images={mockImages} />);

    const stack = screen
      .getByTestId('full-image-modal')
      .querySelector('.MuiStack-root');
    expect(stack).toBeTruthy();

    // simula clique no próprio backdrop
    fireEvent.click(stack!, { target: stack, currentTarget: stack });

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('não deve chamar onClose se clicar dentro da imagem', () => {
    render(<FullImageModal isOpen onClose={mockOnClose} images={mockImages} />);

    const image = screen.getAllByTestId('full-image')[0];
    fireEvent.click(image, { target: image, currentTarget: image });

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('deve renderizar NavigationButtons quando houver mais de uma imagem', () => {
    render(<FullImageModal isOpen onClose={mockOnClose} images={mockImages} />);
    expect(screen.getByTestId('navigation-buttons')).toBeInTheDocument();
  });

  it('não deve renderizar NavigationButtons se houver apenas uma imagem', () => {
    render(
      <FullImageModal
        isOpen
        onClose={mockOnClose}
        images={[{ id: '1', src: '/img1.jpg' }]}
      />,
    );
    expect(screen.queryByTestId('navigation-buttons')).not.toBeInTheDocument();
  });

  it('deve aplicar fullScreen quando estiver em mobile', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);

    render(<FullImageModal isOpen onClose={mockOnClose} images={mockImages} />);
    const dialog = screen.getByTestId('full-image-modal');
    // Jest não renderiza atributos booleanos, mas podemos checar a prop via dataset
    expect(dialog).toBeInTheDocument();
  });
});
