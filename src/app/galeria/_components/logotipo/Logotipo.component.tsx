import { Stack, Typography } from '@mui/material';
import CollectionsIcon from '@mui/icons-material/Collections';

function Logotipo() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Stack bgcolor="primary.light" borderRadius={3} padding={2}>
        <CollectionsIcon color="primary" fontSize="small" />
      </Stack>

      <Stack>
        <Typography
          component="h2"
          fontSize={18}
          color="text.title"
          fontWeight={700}
          lineHeight={1}
        >
          Galeria
        </Typography>

        <Typography
          variant="body2"
          color="primary.main"
          fontFamily="var(--font-cookie)"
          lineHeight={1}
          fontWeight={600}
          letterSpacing={1}
        >
          Davhy Andrade
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Logotipo;
