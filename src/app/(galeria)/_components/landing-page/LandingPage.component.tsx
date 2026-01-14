'use client';

import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { MAIN_URL_BASE } from '@/shared/constants';

import FloatingCircles from './floating-circles/FloatingCircles.component';

function LandingPage() {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const extraText = isMobile
    ? ''
    : ' Uma exploração visual dos ambientes com cores vibrantes e texturas.';

  return (
    <Stack
      width="100%"
      alignItems="center"
      paddingX={4}
      paddingTop={{ xs: 12, sm: 16 }}
      paddingBottom={{ xs: 12, sm: 28 }}
      position="relative"
      overflow="hidden"
      sx={theme => ({
        background: `linear-gradient(
            0deg,
            ${theme.palette.background.paper} 0%,
            ${theme.palette.background.default} 40%
          )`,
      })}
    >
      <FloatingCircles />

      <Chip
        variant={isMobile ? 'filled' : 'outlined'}
        label={
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              width={10}
              height={10}
              bgcolor="primary.main"
              borderRadius={3}
            />

            <Typography variant="caption">
              Fotografia de Rua & Natureza
            </Typography>
          </Stack>
        }
      />

      <Typography
        variant="h2"
        fontSize={{ xs: 48, sm: 72 }}
        fontWeight={700}
        color="text.title"
        lineHeight={1}
        letterSpacing="-0.025em"
        textAlign="center"
        mt={{ xs: 6, sm: 4 }}
      >
        A beleza no{' '}
        <Box
          component="span"
          sx={theme => ({
            background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          })}
        >
          cotidiano
        </Box>
        .
      </Typography>

      <Typography
        variant="body1"
        fontSize={{ xs: 20, sm: 16 }}
        color="text.primary"
        textAlign="center"
        maxWidth={650}
        mt={6}
      >
        {`Fotografias autorais da minha rotina, do jeito que eu vejo o mundo, em cenários e lugares marcantes.${extraText}`}
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        width="100%"
        alignItems="center"
        justifyContent="center"
        spacing={4}
        mt={12}
      >
        <Button
          variant="contained"
          color="textAction"
          href="#image-gallery"
          fullWidth={isMobile}
        >
          Explorar Galeria
        </Button>

        <Button
          variant="outlined"
          color="textAction"
          href={MAIN_URL_BASE}
          fullWidth={isMobile}
        >
          Sobre mim
        </Button>
      </Stack>
    </Stack>
  );
}

export default LandingPage;
