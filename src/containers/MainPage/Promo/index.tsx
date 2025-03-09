import cn from 'classnames';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/Button';

import styles from './styles.module.scss';

export interface PromoProps {
  className?: string;
}

export const Promo: React.FC<PromoProps> = ({ className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <h2>Акция</h2>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src="/images/studia.webp" alt="usluga" fill />
        </div>
        <div>
          <h3>Заголовок</h3>
          <p>Текст акции</p>
          <Button>Записаться</Button>
        </div>
      </div>
    </div>
  );
};
