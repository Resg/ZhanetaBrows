import cn from 'classnames';
import Image from 'next/image';
import React from 'react';

import styles from './styles.module.scss';

export interface HeaderBlockProps {
  className?: string;
}

export const HeaderBlock: React.FC<HeaderBlockProps> = ({ className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Студия бровей и ресниц</h2>
        <p className={styles.text}>Студия в центре Москвы</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src="/images/women.jpeg"
          alt="women"
          fill
        />
      </div>
    </div>
  );
};
