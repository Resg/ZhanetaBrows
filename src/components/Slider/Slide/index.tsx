'use client';

import cn from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
import { SwiperSlide, SwiperSlideProps, useSwiper } from 'swiper/react';

import { SLIDES_PER_VIEW } from '@/constants/slider';

import styles from './styles.module.scss';

export const Slide: React.FC<SwiperSlideProps> = ({
  children,
  className,
  ...rest
}) => {
  const [isMount, setIsMount] = useState(false);
  const swiper = useSwiper();
  useEffect(() => setIsMount(true), []);

  const slideStyle = useMemo(
    () => ({
      width: isMount
        ? swiper.slidesSizesGrid[0].toFixed(3) + 'px'
        : 100 / SLIDES_PER_VIEW + '%',
    }),
    [isMount, swiper.slidesSizesGrid]
  );

  return (
    <SwiperSlide
      {...rest}
      className={cn(styles.slide, className)}
      style={slideStyle}
    >
      {children}
    </SwiperSlide>
  );
};

Slide.displayName = 'SwiperSlide';
