import cn from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

export interface FooterProps {
  className?: string;
}
export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn(styles.footer, className)}>
      <div className={styles.content}>
        <h3>Контакты</h3>
        <div className={styles.contacts}>Перечисление контактов</div>
      </div>
    </footer>
  );
};
