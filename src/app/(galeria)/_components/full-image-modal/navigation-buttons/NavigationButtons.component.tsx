import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
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
        color="textAction"
        sx={{
          ...buttonSx,
          left: 24,
        }}
      >
        <ArrowBackIosNewRoundedIcon />
      </IconButton>

      <IconButton
        ref={nextRef}
        color="textAction"
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
