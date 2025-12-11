import { IconButton, useMediaQuery } from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import type { NavigationButtonsProps } from './NavigationButtons.types';
import { buttonSx } from './NavigationButtons.styles';

function NavigationButtons({ prevRef, nextRef }: NavigationButtonsProps) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  if (isMobile) return null;

  return (
    <>
      <IconButton
        ref={prevRef}
        color="info"
        sx={{
          ...buttonSx,
          left: 24,
        }}
      >
        <ArrowBackIosNewRoundedIcon />
      </IconButton>

      <IconButton
        ref={nextRef}
        color="info"
        sx={{
          ...buttonSx,
          right: 24,
        }}
      >
        <ArrowForwardIosRoundedIcon />
      </IconButton>
    </>
  );
}

export default NavigationButtons;
