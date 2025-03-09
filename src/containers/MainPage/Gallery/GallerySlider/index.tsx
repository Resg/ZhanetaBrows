'use client';

import Image from 'next/image';
import React from 'react';

import { Card } from '@/components/Card';
import { Slide, Slider } from '@/components/Slider';

import styles from './styles.module.scss';

export interface GallerySliderProps {
  className?: string;
}
export const GallerySlider: React.FC<GallerySliderProps> = ({ className }) => {
  return (
    <Slider className={className}>
      <Slide>
        <Card className={styles.card}>
          <div className={styles.image}>
            <Image src="/images/brows.jpg" alt="usluga" fill />
          </div>
        </Card>
      </Slide>
      <Slide>
        <Card className={styles.card}>
          <div className={styles.image}>
            <Image src="/images/brows.jpg" alt="usluga" fill />
          </div>
        </Card>
      </Slide>
      <Slide>
        <Card className={styles.card}>
          <div className={styles.image}>
            <Image src="/images/brows.jpg" alt="usluga" fill />
          </div>
        </Card>
      </Slide>
      <Slide>
        <Card className={styles.card}>
          <div className={styles.image}>
            <Image src="/images/brows.jpg" alt="usluga" fill />
          </div>
        </Card>
      </Slide>
      <Slide>
        <Card className={styles.card}>
          <div className={styles.image}>
            <Image src="/images/brows.jpg" alt="usluga" fill />
          </div>
        </Card>
      </Slide>
      <Slide>
        <Card className={styles.card}>
          <div className={styles.image}>
            <Image src="/images/brows.jpg" alt="usluga" fill />
          </div>
        </Card>
      </Slide>
    </Slider>
  );
};
