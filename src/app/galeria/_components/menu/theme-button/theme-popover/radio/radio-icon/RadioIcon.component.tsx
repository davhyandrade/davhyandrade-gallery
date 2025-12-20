import { Box } from '@mui/material';

function RadioIcon({ color }: { color: string }) {
  return (
    <Box
      sx={{
        width: 20,
        height: 20,
        borderRadius: 2,
        border: 1,
        borderColor: 'text.disabled',
        bgcolor: color,
      }}
    />
  );
}

export default RadioIcon;
