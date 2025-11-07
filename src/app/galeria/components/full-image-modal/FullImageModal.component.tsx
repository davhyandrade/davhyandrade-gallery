import { useRef } from 'react';

import { Box, Dialog, IconButton, Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import SwiperSlide from '@/shared/components/swiper-slide/SwiperSlide.styles';
import Swiper from '@/shared/components/swiper/Swiper.styles';

import {
  Pagination,
  Mousewheel,
  Keyboard,
  Zoom,
  Navigation,
} from 'swiper/modules';

import type { FullImageModalProps } from './FullImageModal.types';
import NavigationButtons from './navigation-buttons/NavigationButtons.component';

function FullImageModal({ isOpen, onClose, images }: FullImageModalProps) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleBackdropClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  if (!images) return null;

  return (
    <Dialog
      data-testid="full-image-modal"
      open={isOpen}
      onClose={onClose}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          },
        },
        paper: {
          sx: {
            backgroundColor: 'transparent',
            borderRadius: 0,
            boxShadow: 'none',
          },
        },
      }}
      maxWidth={false}
      fullScreen={isMobile}
    >
      <IconButton
        data-testid="close-button"
        color="info"
        onClick={onClose}
        sx={{
          position: 'fixed',
          top: { xs: 16, sm: 24 },
          right: { xs: 16, sm: 24 },
          bgcolor: 'white.main',
          zIndex: 999,
          '&:hover': {
            bgcolor: 'gray.light',
          },
        }}
      >
        <CloseRoundedIcon />
      </IconButton>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        height="100%"
        onClick={handleBackdropClick}
      >
        <Swiper
          pagination
          mousewheel
          keyboard
          loop
          zoom
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Zoom]}
          onBeforeInit={swiper => {
            if (typeof swiper.params.navigation === 'object') {
              Object.assign(swiper.params.navigation, {
                prevEl: prevButtonRef.current,
                nextEl: nextButtonRef.current,
              });
            }
          }}
        >
          {images.map(image => (
            <SwiperSlide key={image.id} onClick={handleBackdropClick}>
              <Box className="swiper-zoom-container">
                <Box
                  data-testid="full-image"
                  component="img"
                  src={image.src}
                  sx={{
                    width: 'auto',
                    maxWidth: '100%',
                    maxHeight: '90dvh',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}

          {images.length > 1 && (
            <NavigationButtons
              prevRef={prevButtonRef}
              nextRef={nextButtonRef}
            />
          )}
        </Swiper>
      </Stack>
    </Dialog>
  );
}

export default FullImageModal;
