import { Box, Stack, Typography } from '@mui/material';

function Loading() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100dvh"
    >
      <Stack
        direction="row"
        alignItems="center"
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
        <Typography variant="body2" color="gray.main">
          Carregando
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 0.2,
            '& > div': {
              width: 4,
              height: 4,
              borderRadius: '50%',
              bgcolor: 'gray.main',
              animation: 'dotFlashing 1.4s infinite linear',
            },
            '& > div:nth-of-type(1)': { animationDelay: '0s' },
            '& > div:nth-of-type(2)': { animationDelay: '0.3s' },
            '& > div:nth-of-type(3)': { animationDelay: '0.6s' },
            '@keyframes dotFlashing': {
              '0%': { opacity: 0.2 },
              '20%': { opacity: 1 },
              '100%': { opacity: 0.2 },
            },
          }}
        >
          <Box />
          <Box />
          <Box />
        </Box>
      </Stack>
    </Stack>
  );
}

export default Loading;
