'use client';

import { useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';

type UseClipboardProps = {
  message: string;
};

type UseClipboardReturn = {
  isClipboardSupported: boolean;
  copy: (text: string) => Promise<void>;
};

const useClipboard = ({ message }: UseClipboardProps): UseClipboardReturn => {
  const isClipboardSupported = useMemo(() => {
    return typeof window !== 'undefined' && !!navigator.clipboard;
  }, []);

  const copy = useCallback(
    async (text: string) => {
      if (!isClipboardSupported) {
        toast.error('Clipboard não suportado neste navegador');
        return;
      }

      try {
        await navigator.clipboard.writeText(text);

        toast.success(message);
      } catch (error) {
        toast.error('Erro ao copiar para a área de transferência!') ;

        console.error('Erro ao copiar:', error);
      }
    },
    [isClipboardSupported, message],
  );

  return {
    isClipboardSupported,
    copy,
  };
};

export default useClipboard;
