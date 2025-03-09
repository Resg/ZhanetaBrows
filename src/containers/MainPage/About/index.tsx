import cn from 'classnames';
import Image from 'next/image';
import React from 'react';

import styles from './styles.module.scss';

export interface AboutProps {
  className?: string;
}

export const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <h2 className={styles.title}>О студии</h2>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src="/images/studia.webp" alt="studia" fill />
        </div>
        <p className={styles.text}>Текст о студии Надо придумать</p>
      </div>
    </div>
  );
};
