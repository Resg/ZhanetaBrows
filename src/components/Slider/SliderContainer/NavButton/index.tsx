'use client';

import cn from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';

import { Button } from '@/components/Button';
import { ArrowBack } from '@/components/icons/ArrowBack';
import { ArrowNext } from '@/components/icons/ArrowNext';

import styles from './styles.module.scss';

export interface NavButtonProps {
  className?: string;
  type: 'next' | 'prev';
}

export const NavButton: React.FC<NavButtonProps> = ({ type, className }) => {
  const swiper = useSwiper();
  const [active, setActive] = useState(!swiper.isLocked && type === 'next');
  const handleClick = useCallback(() => {
    if (type === 'next') {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  }, [type, swiper]);

  useEffect(() => {
    swiper.on('slideChange', (swiper) => {
      if (
        !swiper.isLocked &&
        (type === 'next' ? !swiper.isEnd : !swiper.isBeginning)
      ) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, [swiper, type]);

  const Icon = useCallback(
    (props: React.SVGAttributes<SVGElement>) =>
      type === 'prev' ? <ArrowBack {...props} /> : <ArrowNext {...props} />,
    [type]
  );

  return (
    <Button
      variant="text"
      className={cn(styles.button, className)}
      onClick={handleClick}
      disabled={!active}
    >
      <Icon className={styles.icon} />
    </Button>
  );
};
