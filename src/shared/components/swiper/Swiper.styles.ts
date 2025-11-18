import { styled } from '@mui/material/styles';
import { Swiper as SwiperBase } from 'swiper/react';

const Swiper = styled(SwiperBase)(({ theme }) => ({
  '.swiper-button-next, .swiper-button-prev': {
    color: theme.palette.text.primary,
    width: 32,
    height: 32,
  },
  '.swiper-pagination': {
    position: 'fixed',
  },
  '.swiper-pagination-bullet': {
    background: theme.palette.text.primary,
    opacity: 0.6,
  },
  '.swiper-pagination-bullet-active': {
    background: theme.palette.primary.main,
    opacity: 1,
  },
}));

export default Swiper;
