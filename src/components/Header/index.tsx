import cn from 'classnames';
import React from 'react';

import { User } from '@/components/User';

import styles from './styles.module.scss';

export interface HeaderProps {
  className?: string;
}
export const Header: React.FC<HeaderProps> = async ({ className }) => {
  return (
    <header className={cn(styles.header, className)}>
      <div></div>
      <User />
    </header>
  );
};
