import { Box, Stack, Typography } from '@mui/material';

function Loading() {
  const dotSx = {
    width: 3,
    height: 3,
    borderRadius: '50%',
    bgcolor: 'currentColor',
    opacity: 0,
    animationDuration: '3s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100dvh"
    >
      <Stack
        direction="row"
        alignItems="baseline"
        spacing={0.5}
        sx={{
          userSelect: 'none',
          animation: 'verticalGradient 3s infinite ease-in-out',
          '@keyframes verticalGradient': {
            '0%': { color: 'gray.main' },
            '20%': { color: 'primary.main' },
            '100%': { color: 'gray.main' },
          },
        }}
      >
        <Typography variant="body2" color="inherit">
          Carregando
        </Typography>

        <Stack direction="row" spacing={0.5}>
          <Box
            sx={{
              ...dotSx,
              animationName: 'typingDot1',
              '@keyframes typingDot1': {
                '0%, 100%': { opacity: 0 },
                '10%, 90%': { opacity: 1 },
              },
            }}
          />
          <Box
            sx={{
              ...dotSx,
              animationName: 'typingDot2',
              '@keyframes typingDot2': {
                '0%, 100%': { opacity: 0 },
                '20%, 60%': { opacity: 1 },
              },
            }}
          />
          <Box
            sx={{
              ...dotSx,
              animationName: 'typingDot3',
              '@keyframes typingDot3': {
                '0%, 90%': { opacity: 0 },
                '30%, 50%': { opacity: 1 },
              },
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Loading;
