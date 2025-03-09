'use client';

import Image from 'next/image';
import React from 'react';

import { Card } from '@/components/Card';
import { Slide, Slider } from '@/components/Slider';

import styles from './styles.module.scss';

export interface PriceSliderProps {
  className?: string;
}
export const PriceSlider: React.FC<PriceSliderProps> = ({ className }) => {
  return (
    <Slider className={className}>
      <Slide>
        <Card className={styles.card}>
          <div className={styles.image}>
            <Image src="/images/brows.jpg" alt="usluga" fill />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.title}>Название улсуги</h3>
            <div className={styles.text}>детали услуги</div>
          </div>
        </Card>
      </Slide>
      <Slide>
        <Card className={styles.card}>
          <div className={styles.image}>
            <Image src="/images/brows.jpg" alt="usluga" fill />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.title}>Название улсуги</h3>
            <div className={styles.text}>детали услуги</div>
          </div>
        </Card>
      </Slide>
      <Slide>
        <Card className={styles.card}>
          <div className={styles.image}>
            <Image src="/images/brows.jpg" alt="usluga" fill />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.title}>Название улсуги</h3>
            <div className={styles.text}>детали услуги</div>
          </div>
        </Card>
      </Slide>
      <Slide>
        <Card className={styles.card}>
          <div className={styles.image}>
            <Image src="/images/brows.jpg" alt="usluga" fill />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.title}>Название улсуги</h3>
            <div className={styles.text}>детали услуги</div>
          </div>
        </Card>
      </Slide>
      <Slide>
        <Card className={styles.card}>
          <div className={styles.image}>
            <Image src="/images/brows.jpg" alt="usluga" fill />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.title}>Название улсуги</h3>
            <div className={styles.text}>детали услуги</div>
          </div>
        </Card>
      </Slide>
      <Slide>
        <Card className={styles.card}>
          <div className={styles.image}>
            <Image src="/images/brows.jpg" alt="usluga" fill />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.title}>Название улсуги</h3>
            <div className={styles.text}>детали услуги</div>
          </div>
        </Card>
      </Slide>
    </Slider>
  );
};
