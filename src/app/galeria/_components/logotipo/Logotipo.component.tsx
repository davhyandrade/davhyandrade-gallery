import { Stack, Typography } from '@mui/material';
import CollectionsIcon from '@mui/icons-material/Collections';

function Logotipo() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Stack bgcolor="primary.light" borderRadius={3} padding={2}>
        <CollectionsIcon color="primary" fontSize="small" />
      </Stack>

      <Typography
        component="h2"
        fontSize={18}
        color="text.title"
        fontWeight={700}
      >
        Galeria
      </Typography>
    </Stack>
  );
}

export default Logotipo;
