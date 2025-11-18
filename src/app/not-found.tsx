import { Button, Stack, Typography } from '@mui/material';

function NotFoundPage() {
  return (
    <Stack
      width="100%"
      height="100dvh"
      alignItems="center"
      justifyContent="center"
    >
      <Stack alignItems="center" color="text.primary" padding={2}>
        <Typography variant="h1">404</Typography>

        <Typography
          variant="body1"
          color="text.primary"
          textAlign="center"
          fontWeight={600}
        >
          Página não encontrada
        </Typography>

        <Typography
          variant="body2"
          color="text.primary"
          maxWidth={300}
          textAlign="center"
          mt={2}
        >
          Ela pode ter sido removida ou o endereço está incorreto.
        </Typography>

        <Button
          variant="text"
          color="text"
          href="/"
          sx={{ mt: 8, fontWeight: 600 }}
        >
          Voltar para a home
        </Button>
      </Stack>
    </Stack>
  );
}

export default NotFoundPage;
