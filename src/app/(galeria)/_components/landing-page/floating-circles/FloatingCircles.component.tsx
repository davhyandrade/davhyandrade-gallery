import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { pulseAnimation } from './FloatingCircles.styles';

function FloatingCircles() {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <>
      <Box
        sx={theme => ({
          width: 200,
          height: 200,
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          filter: 'blur(120px)',
          animation: `${pulseAnimation(
            theme.palette.primary,
          )} 4s ease-in-out infinite`,
          pointerEvents: 'none',
          position: 'absolute',
          right: 0,
          ...(isMobile ? { bottom: 0 } : { top: 0 }),
        })}
      />

      <Box
        sx={theme => ({
          width: 300,
          height: 300,
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          filter: 'blur(120px)',
          animation: `${pulseAnimation(
            theme.palette.secondary,
          )} 4s ease-in-out infinite`,
          pointerEvents: 'none',
          position: 'absolute',
          left: 0,
          ...(isMobile ? { top: 0 } : { bottom: 0 }),
        })}
      />
    </>
  );
}

export default FloatingCircles;
