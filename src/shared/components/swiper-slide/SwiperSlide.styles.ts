import { styled } from '@mui/material/styles';
import { SwiperSlide as SwiperSlideBase } from 'swiper/react';

const SwiperSlide = styled(SwiperSlideBase)(() => ({
  width: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default SwiperSlide;
