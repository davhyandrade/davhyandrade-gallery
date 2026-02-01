import { renderHook, act } from '@testing-library/react';
import { toast } from 'react-toastify';
import useClipboard from '../useClipboard.hooks';

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('#useClipboard', () => {
  const originalClipboard = navigator.clipboard;
  const mockWriteText = jest.fn();

  beforeAll(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: mockWriteText,
      },
      writable: true,
      configurable: true,
    });
  });

  afterAll(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: originalClipboard,
      writable: true,
      configurable: true,
    });
  });

  it('returns isClipboardSupported as true when clipboard is supported', () => {
    const { result } = renderHook(() => useClipboard({ message: 'Success' }));

    expect(result.current.isClipboardSupported).toBe(true);
  });

  it('calls writeText with correct text', async () => {
    mockWriteText.mockResolvedValue(undefined);
    const textToCopy = 'Hello World';

    const { result } = renderHook(() => useClipboard({ message: 'Success' }));

    await act(async () => {
      await result.current.copy(textToCopy);
    });

    expect(mockWriteText).toHaveBeenCalledWith(textToCopy);
  });

  it('shows success toast', async () => {
    const message = 'Copied successfully!';

    const { result } = renderHook(() => useClipboard({ message }));

    await act(async () => {
      await result.current.copy('Hello World');
    });

    expect(toast.success).toHaveBeenCalledWith(message);
    expect(toast.error).not.toHaveBeenCalled();
  });

  it('shows error toast when writeText fails', async () => {
    mockWriteText.mockRejectedValue(new Error('Write failed'));

    const { result } = renderHook(() => useClipboard({ message: 'Success' }));

    await act(async () => {
      await result.current.copy('text');
    });

    expect(toast.error).toHaveBeenCalledWith(
      'Erro ao copiar para a área de transferência!',
    );
  });

  it('calls toast error when clipboard is not supported', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: undefined,
      writable: true,
      configurable: true,
    });

    const { result } = renderHook(() => useClipboard({ message: 'Success' }));

    await act(async () => {
      await result.current.copy('text');
    });

    expect(toast.error).toHaveBeenCalledWith(
      'Clipboard não suportado neste navegador',
    );
  });

  it('does not call writeText when clipboard is not supported', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: undefined,
      writable: true,
      configurable: true,
    });

    const { result } = renderHook(() => useClipboard({ message: 'Success' }));

    await act(async () => {
      await result.current.copy('text');
    });

    expect(mockWriteText).not.toHaveBeenCalled();
  });

  it('returns isClipboardSupported as false when clipboard is not supported', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: undefined,
      writable: true,
      configurable: true,
    });

    const { result } = renderHook(() => useClipboard({ message: 'Success' }));

    expect(result.current.isClipboardSupported).toBe(false);
  });
});
