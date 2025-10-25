'use client';

import Typed from 'typed.js';

import { useEffect, useRef } from 'react';
import { Stack, Typography } from '@mui/material';

function Loading() {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['...'],
      startDelay: 150,
      typeSpeed: 300,
      backSpeed: 300,
      backDelay: 150,
      loop: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Typography
        variant="caption"
        color="gray.main"
        sx={{
          userSelect: 'none',
          animation: 'verticalGradient 2s ease-in-out infinite',
          '@keyframes verticalGradient': {
            '0%': { color: 'gray.main' },
            '50%': { color: 'primary.main' },
            '100%': { color: 'gray.main' },
          },
        }}
      >
        Carregando
        <span ref={typedRef} />
      </Typography>
    </Stack>
  );
}

export default Loading;
