import { Button, Stack, Typography } from '@mui/material';

import Logotipo from '@/app/(galeria)/_components/logotipo/Logotipo.component';

import { MAIN_URL_BASE } from '@/shared/constants';

function Footer() {
  return (
    <Stack
      alignItems="center"
      padding={{ xs: 6, sm: 10 }}
      borderTop={1}
      borderColor="divider"
      bgcolor="background.paper"
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'start', sm: 'center' }}
        justifyContent="space-between"
        spacing={8}
        width="100%"
        maxWidth="xl"
      >
        <Stack flex={1}>
          <Logotipo />
        </Stack>

        <Stack flex={1} direction="row" justifyContent="center">
          <Typography
            variant="caption"
            color="text.secondary"
            textAlign={{ xs: 'start', sm: 'center' }}
          >
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
    </Stack>
  );
}

export default Footer;
