import { useRef } from 'react';

import { Dialog, IconButton, Stack } from '@mui/material';
import { alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import SwiperSlide from '@/shared/components/swiper-slide/SwiperSlide.styles';
import Swiper from '@/shared/components/swiper/Swiper.styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
          sx: theme => ({
            backgroundColor: alpha(theme.palette.background.paper, 0.8),
          }),
        },
        paper: {
          sx: {
            background: 'transparent',
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
        color="textAction"
        onClick={onClose}
        sx={{
          position: 'fixed',
          top: { xs: 16, sm: 24 },
          right: { xs: 16, sm: 24 },
          bgcolor: theme => alpha(theme.palette.background.paper, 0.9),
          zIndex: 999,
          '&:hover': {
            bgcolor: 'background.paper',
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
              <Stack
                className="swiper-zoom-container"
                bgcolor="background.default"
              >
                <LazyLoadImage
                  data-testid="full-image"
                  src={image.src}
                  effect="blur"
                  style={{
                    width: 'auto',
                    maxWidth: '100%',
                    maxHeight: '90dvh',
                    objectFit: 'contain',
                  }}
                />
              </Stack>
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
