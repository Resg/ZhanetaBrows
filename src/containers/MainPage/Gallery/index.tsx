import cn from 'classnames';
import React from 'react';

import { GallerySlider } from '@/containers/MainPage/Gallery/GallerySlider';

import styles from './styles.module.scss';

export interface GalleryProps {
  className?: string;
}
export const Gallery: React.FC<GalleryProps> = ({ className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <h2>Галерея</h2>
      <div className={styles.content}>
        <GallerySlider className={styles.slider} />
      </div>
    </div>
  );
};
