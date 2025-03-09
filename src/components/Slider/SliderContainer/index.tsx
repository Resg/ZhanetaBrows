'use client';

import 'swiper/scss';
import 'swiper/scss/pagination';

import cn from 'classnames';
import React, { useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import { Portal } from '@/components/Portal';
import { NavButton } from '@/components/Slider/SliderContainer/NavButton';
import { SLIDES_PER_VIEW } from '@/constants/slider';

import styles from './styles.module.scss';

export interface SliderContainerProps {
  className?: string;
  children?: React.ReactNode;
}

export const SliderContainer: React.FC<SliderContainerProps> = ({
  className,
  children,
}) => {
  const [refPrev, setPrev] = useState<HTMLDivElement | null>(null);
  const [refNext, setNext] = useState<HTMLDivElement | null>(null);

  return (
    <div className={cn(styles.container, className)}>
      <div ref={setPrev} />
      <Swiper
        className={cn(styles.swiper)}
        modules={[Pagination]}
        pagination={{
          type: 'bullets',
          clickable: true,
          bulletClass: cn('swiper-pagination-bullet', styles.bullet),
          bulletActiveClass: cn(
            'swiper-pagination-bullet-active',
            styles.bulletActive
          ),
        }}
        slidesPerView={SLIDES_PER_VIEW}
      >
        <Portal container={refPrev}>
          <NavButton
            className={cn(styles.button, styles.buttonLeft)}
            type="prev"
          />
        </Portal>
        <Portal container={refNext}>
          <NavButton
            className={cn(styles.button, styles.buttonRight)}
            type={'next'}
          />
        </Portal>
        {children}
      </Swiper>
      <div ref={setNext} />
    </div>
  );
};
