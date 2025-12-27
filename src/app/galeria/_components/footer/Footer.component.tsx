import { Box, Button, Divider, Stack, Typography } from '@mui/material';

import Logotipo from '@/app/galeria/_components/logotipo/Logotipo.component';

import { MAIN_URL_BASE } from '@/shared/constants';

function Footer() {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      alignItems="flex-end"
      justifyContent="space-between"
      padding={{ xs: 6, sm: 10 }}
      spacing={8}
      borderTop={1}
      borderColor="divider"
    >
      <Stack flex={1} spacing={2}>
        <Logotipo />

        <Typography variant="body2" color="text.primary" maxWidth={400}>
          Fotografias autorais da minha rotina, do jeito que eu vejo o mundo, em
          cenários e lugares marcantes.
        </Typography>
      </Stack>

      <Stack flex={1} direction="row" justifyContent="center">
        <Typography variant="caption" color="text.secondary">
          © 2025 Galeria Davhy Andrade. Todos os direitos reservados.
        </Typography>
      </Stack>

      <Stack flex={1} direction="row" justifyContent="end" spacing={2}>
        <Button variant="text" color="textAction" href="#">
          Home
        </Button>

        <Button variant="text" color="textAction" href={MAIN_URL_BASE}>
          Página principal
        </Button>
      </Stack>
    </Stack>
  );
}

export default Footer;
