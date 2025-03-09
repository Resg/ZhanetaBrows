import cn from 'classnames';
import React from 'react';

import { PriceSlider } from '@/containers/MainPage/Price/PriceSlider';

import styles from './styles.module.scss';

export interface PriceProps {
  className?: string;
}
export const Price: React.FC<PriceProps> = ({ className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <h2>Прайс</h2>
      <div className={styles.content}>
        <PriceSlider className={styles.slider} />
      </div>
    </div>
  );
};
